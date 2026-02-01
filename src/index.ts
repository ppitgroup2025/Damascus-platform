export default {
    async fetch(request: Request, env: any) {
        const url = new URL(request.url);

        // API: Send Email via Resend
        if (url.pathname === '/api/send-email' && request.method === 'POST') {
            try {
                const data = await request.json() as any;
                const { name, email, service, message, fileLinks, details } = data;
                const isQuotation = service && service.includes('Quotation');

                // Professional Email Styling
                const emailStyles = `
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    border: 1px solid #eee;
                    padding: 20px;
                    border-radius: 10px;
                `;

                const headerStyles = `
                    background-color: #007bff;
                    color: white;
                    padding: 15px;
                    border-radius: 8px 8px 0 0;
                    margin: -20px -20px 20px -20px;
                    text-align: center;
                `;

                // Handle file links for Quotations
                const fileLinksHtml = fileLinks && fileLinks.length > 0
                    ? `
                        <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                            <h3 style="margin-top: 0; color: #007bff;">📄 Uploaded Documents:</h3>
                            <ul style="padding-left: 20px;">
                                ${fileLinks.map((link: string) => `<li style="margin-bottom: 8px;"><a href="${link}" style="color: #007bff;">Download File</a></li>`).join('')}
                            </ul>
                        </div>`
                    : '';

                // Generate HTML Body
                const htmlBody = `
                    <div style="${emailStyles}">
                        <div style="${headerStyles}">
                            <h2 style="margin: 0;">${isQuotation ? 'New Quotation Request' : 'New Contact Inquiry'}</h2>
                        </div>
                        <p><strong>Customer Name:</strong> ${name}</p>
                        <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Service Type:</strong> ${service || 'General'}</p>
                        
                        ${details ? `<div style="background: #e9ecef; padding: 10px; margin: 15px 0; border-radius: 5px;">
                            <strong>Quote Details:</strong><br/>
                            <pre style="white-space: pre-wrap; font-family: inherit;">${details}</pre>
                        </div>` : ''}

                        <p><strong>Message:</strong></p>
                        <div style="background: #fff; border-left: 4px solid #007bff; padding: 10px 15px; font-style: italic;">
                            ${message || 'No message provided.'}
                        </div>

                        ${fileLinksHtml}

                        <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
                        <p style="font-size: 0.8rem; color: #777; text-align: center;">
                            This is an automated notification from the Damascus Translation website.
                        </p>
                    </div>
                `;

                const resendResponse = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        from: 'Damascus Translation <onboarding@resend.dev>',
                        to: ['jalalaljabri63@gmail.com'],
                        subject: `${isQuotation ? '⚡ QUOTE' : '✉️ CONTACT'}: ${name}`,
                        html: htmlBody,
                    }),
                });

                const result = await resendResponse.json();
                return new Response(JSON.stringify(result), {
                    status: resendResponse.ok ? 200 : 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            } catch (error: any) {
                return new Response(JSON.stringify({ error: error.message }), {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        }

        const response = await env.ASSETS.fetch(request);

        // If the request is for a page (no file extension) and returns 404, 
        // serve the index.html content to support SPA routing.
        if (response.status === 404 && !url.pathname.split('/').pop()?.includes('.')) {
            // Fetch the index.html explicitly
            const indexResponse = await env.ASSETS.fetch(new URL('/index.html', request.url));

            // Return index.html content but keep the original 404 URL in the browser
            // (React Router will then handle the path)
            return new Response(indexResponse.body, {
                ...indexResponse,
                status: 200 // Force 200 so the browser/router treats it as a valid page
            });
        }

        return response;
    }
};
