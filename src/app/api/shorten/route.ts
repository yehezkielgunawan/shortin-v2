export async function POST(request: Request) {
	// get the longUrl and alias from the body from the request
	const { url, alias } = await request.json();
	if (!url) {
		return new Response("No URL", { status: 400 });
	}
	if (!request.body) {
		return new Response("No body", { status: 400 });
	}
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shorten`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		// get the longUrl and alias from the body from the request
		body: JSON.stringify({
			url: url,
			shortCodeInput: alias,
		}),
	});

	const data = await response.json();
	if (!response.ok) {
		return new Response(data.error, { status: response.status });
	}
	return Response.json({ data });
}
