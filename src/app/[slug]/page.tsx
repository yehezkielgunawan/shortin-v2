import { getLongUrl } from "@/services/shorten";
import { notFound, redirect } from "next/navigation";

type Params = Promise<{
	slug: string;
}>;

export default async function RedirectPage({
	params,
}: {
	params: Params;
}) {
	const { slug } = await params;

	try {
		const data = await getLongUrl(slug);
		if (!data) {
			notFound();
		}
		redirect(data.url);
	} catch (error) {
		console.error("Error fetching long URL:", error);
		notFound();
	}
}
