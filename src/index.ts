export default {
    async fetch(request: Request, env: any) {
        const url = new URL(request.url);
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
