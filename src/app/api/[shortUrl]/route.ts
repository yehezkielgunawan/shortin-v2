type Params = Promise<{
	shortUrl: string;
}>;

export async function GET(_request: Request, { params }: { params: Params }) {
	const { shortUrl } = await params;
	if (!shortUrl) {
		return new Response("No URL", { status: 400 });
	}
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
	const data = await response.json();
	if (!response.ok) {
		return new Response(data.error, { status: response.status });
	}
	return Response.json({ data });
}
