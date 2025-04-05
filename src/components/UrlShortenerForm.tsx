"use client";

import { type FormEvent, useState } from "react";

export default function UrlShortenerForm() {
	const [longUrl, setLongUrl] = useState("");
	const [alias, setAlias] = useState("");
	const domain = "shortin.domain.com"; // Replace with your actual domain

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// API call will be added later
		console.log({ longUrl, alias });
	};

	return (
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
					/>
				</div>
				<label htmlFor="staticLabel" className="label">
					<span className="label-text-alt">Leave empty for random alias</span>
				</label>
			</div>

			<button type="submit" className="btn btn-primary w-full">
				Shorten URL
			</button>
		</form>
	);
}
