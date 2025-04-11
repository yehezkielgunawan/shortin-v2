import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import UrlShortenerForm from "@/components/UrlShortenerForm";

test("Home Page Render", () => {
	render(<Home />);
	expect(
		screen.getByRole("heading", { level: 1, name: "URL Shortener" }),
	).toBeDefined();
});

test("Shorten URL Form Render", () => {
	render(<UrlShortenerForm />);
	// Use a more specific selector or accept multiple matches
	expect(screen.getAllByText("Long URL").length).toBeGreaterThan(0);
	expect(screen.getAllByText("Short URL").length).toBeGreaterThan(0);

	// render the submit button
	expect(screen.getAllByText("Shorten URL").length).toBeGreaterThan(0);
});
