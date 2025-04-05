"use client";

import { useRouter } from "next/navigation";
import { getLongUrl } from "@/services/shorten";
import { notFound } from "next/navigation";

type Params = Promise<{
	slug: string;
}>;

export default async function RedirectPage({
	params,
}: {
	params: Params;
}) {
	const router = useRouter();
	const { slug } = await params;
	try {
		const data = await getLongUrl(slug);
		if (!data) {
			notFound();
		}
		router.push(data.url);
	} catch (error) {
		console.error("Error fetching long URL:", error);
		notFound();
	}
	return (
		// just display redirecting message
		<h1>Redirecting...</h1>
	);
}
