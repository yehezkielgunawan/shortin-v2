import Footer from "./Footer";
import Header from "./Header";

const GeneralWrapper = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<Header />
			<main>
				<article>{children}</article>
			</main>
			<Footer />
		</>
	);
};

export default GeneralWrapper;
