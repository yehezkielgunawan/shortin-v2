import GeneralWrapper from "@/components/GeneralWrapper";
import UrlShortenerForm from "@/components/UrlShortenerForm";

export default function Home() {
	return (
		<GeneralWrapper>
			<div className="mx-auto w-full max-w-3xl">
				<h1 className="mb-6 text-center font-bold text-2xl md:text-3xl">
					URL Shortener
				</h1>

				<UrlShortenerForm />

				{/* Results will be displayed here when API is integrated */}
			</div>
		</GeneralWrapper>
	);
}
