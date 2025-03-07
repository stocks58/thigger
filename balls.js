export default {
	async fetch(req: Request): Promise<Response> {
		const url = new URL(req.url);

		url.protocol = "https:";
		url.host = "service.nettleweb.com";
		url.hash = "";

		const res = await self.fetch(url, {
			body: req.body,
			method: req.method,
			headers: req.headers,
			redirect: "follow"
		});

		return res.ok ? res : new Response(void 0, { status: res.status, headers: {} });
	}
};
