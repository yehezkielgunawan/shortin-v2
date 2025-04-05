import Link from "next/link";

const Footer = () => {
	return (
		<footer className="footer footer-center container mx-auto my-12 gap-6 lg:max-w-5xl">
			<Link
				href="https://yehezgun.com"
				target="_blank"
				className="link link-hover"
				rel="noreferrer"
			>
				© {new Date().getFullYear()} | Yehezgun
			</Link>
		</footer>
	);
};

export default Footer;
