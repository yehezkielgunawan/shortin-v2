"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getLongUrlAPIRoute } from "@/services/shorten";
import { notFound } from "next/navigation";

type Params = {
	slug: string;
};

// Remove the async keyword from the component function
export default function RedirectPage({
	params,
}: {
	params: Params;
}) {
	const router = useRouter();

	useEffect(() => {
		const fetchUrl = async () => {
			try {
				const { slug } = params;
				const data = await getLongUrlAPIRoute(slug);
				if (!data) {
					notFound();
				}
				router.push(data.url);
			} catch (error) {
				console.error("Error fetching long URL:", error);
				notFound();
			}
		};

		fetchUrl();
	}, [router, params]);

	return (
		<div className="flex h-screen w-full items-center justify-center">
			<div className="text-center">
				<h2 className="mb-2 font-semibold text-xl">Redirecting you...</h2>
				<p className="text-gray-600">Please wait a moment</p>
			</div>
		</div>
	);
}
