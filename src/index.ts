export default {
    async fetch(request: Request, env: any) {
        const url = new URL(request.url);
        const response = await env.ASSETS.fetch(request);

        // If the request is for a page (no file extension) and returns 404, 
        // serve the index.html to support SPA routing.
        if (response.status === 404 && !url.pathname.split('/').pop()?.includes('.')) {
            return env.ASSETS.fetch(new URL('/', request.url));
        }

        return response;
    }
};
