"use client";

import { shortenUrl } from "@/services/shorten";
import { type FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { IoCopyOutline } from "react-icons/io5";

export default function UrlShortenerForm() {
	const [longUrl, setLongUrl] = useState("");
	const [alias, setAlias] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
	const domain = "shortin.yehezgun.com"; // Replace with your actual domain

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		// POST the URL to the server and return the shortened URL

		const response = await shortenUrl(
			longUrl,
			alias === "" ? undefined : alias,
		);
		console.log(response);
		if (response) {
			setShortenedUrl(response.shortCode);
			toast.success("URL shortened successfully!");
		} else {
			toast.error("Failed to shorten URL");
		}
		setIsLoading(false);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="form-control w-full">
					<label htmlFor="longURL" className="label">
						<span className="floating-label">Long URL</span>
					</label>
					<input
						type="url"
						placeholder="https://example.com/very/long/url/to/shorten"
						className="input input-bordered w-full"
						value={longUrl}
						onChange={(e) => setLongUrl(e.target.value)}
						// will focus here when first loaded
						onFocus={(e) => {
							e.target.select();
						}}
						required
					/>
				</div>

				<div className="form-control w-full">
					<label htmlFor="shortURL" className="label">
						<span className="floating-label">Short URL</span>
					</label>
					<div className="flex">
						<div className="flex items-center rounded-l-lg border-base-content border-y border-l border-opacity-20 bg-base-300 px-3 py-1">
							{domain}/
						</div>
						<input
							type="text"
							placeholder="alias (optional)"
							className="input input-bordered flex-1 rounded-l-none"
							value={alias}
							onChange={(e) => setAlias(e.target.value)}
							// will focus here when pressing tab
							onFocus={(e) => {
								e.target.select();
							}}
						/>
					</div>
					<label htmlFor="staticLabel" className="label">
						<span className="label-text-alt">Leave empty for random alias</span>
					</label>
				</div>

				<button
					type="submit"
					className="btn btn-primary w-full"
					// will submit the form when pressing enter
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
						}
					}}
					disabled={isLoading}
				>
					{isLoading ? <span className="loading loading-spinner" /> : null}
					Shorten URL
				</button>
			</form>

			{shortenedUrl && (
				<p className="alert alert-success">
					Final URL:{" "}
					<span className="font-bold italic">{`https://${domain}/${shortenedUrl}`}</span>{" "}
					<button
						type="button"
						className="btn btn-outline rounded-xl"
						onClick={() => {
							navigator.clipboard.writeText(`${domain}/${shortenedUrl}`);
							toast.success("URL copied to clipboard!");
						}}
					>
						<IoCopyOutline size={16} />
					</button>
				</p>
			)}
		</>
	);
}
