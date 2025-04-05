// POST the URL to the server and return the shortened URL

export type BaseResType = {
	id: string;
	url: string;
	shortCode: string;
	createdAt: string;
	updatedAt: string;
	count: number;
};

export const shortenUrl = async (
	longUrl: string,
	alias?: string,
): Promise<BaseResType> => {
	// fetch the /api/shorten endpoint
	const response = await fetch("/api/shorten", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			url: longUrl,
			alias: alias,
		}),
	});
	if (!response.ok) {
		throw new Error("Failed to shorten URL");
	}
	const data = await response.json();
	return data.data;
};

export const getLongUrl = async (shortUrl: string): Promise<BaseResType> => {
	// fetch the /api/[shortUrl] endpoint
	const response = await fetch(`/api/${shortUrl}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!response.ok) {
		throw new Error("Failed to get long URL");
	}
	const data = await response.json();
	return data.data;
};
