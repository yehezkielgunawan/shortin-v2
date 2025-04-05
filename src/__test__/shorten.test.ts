import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { shortenUrl, getLongUrl, type BaseResType } from "@/services/shorten";

describe("URL Shortening Service", () => {
	beforeEach(() => {
		// Mock the global fetch function
		global.fetch = vi.fn();
	});

	afterEach(() => {
		vi.resetAllMocks();
	});

	describe("shortenUrl", () => {
		it("should return a shortened URL when successful", async () => {
			// Mock response data
			const mockResponse: BaseResType = {
				id: "123",
				url: "https://example.com",
				shortCode: "abc123",
				createdAt: "2023-01-01T00:00:00.000Z",
				updatedAt: "2023-01-01T00:00:00.000Z",
				count: 0,
			};

			// Setup the mock fetch to return success
			vi.mocked(global.fetch).mockResolvedValueOnce({
				ok: true,
				json: async () => ({ data: mockResponse }),
			} as Response);

			// Call the function
			const result = await shortenUrl("https://example.com");

			// Assertions
			expect(global.fetch).toHaveBeenCalledWith("/api/shorten", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					url: "https://example.com",
					alias: undefined,
				}),
			});
			expect(result).toEqual(mockResponse);
		});

		it("should handle custom alias", async () => {
			// Mock response data
			const mockResponse: BaseResType = {
				id: "123",
				url: "https://example.com",
				shortCode: "myalias",
				createdAt: "2023-01-01T00:00:00.000Z",
				updatedAt: "2023-01-01T00:00:00.000Z",
				count: 0,
			};

			// Setup the mock
			vi.mocked(global.fetch).mockResolvedValueOnce({
				ok: true,
				json: async () => ({ data: mockResponse }),
			} as Response);

			// Call with alias
			const result = await shortenUrl("https://example.com", "myalias");

			// Assertions
			expect(global.fetch).toHaveBeenCalledWith("/api/shorten", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					url: "https://example.com",
					alias: "myalias",
				}),
			});
			expect(result).toEqual(mockResponse);
		});

		it("should throw an error when the API call fails", async () => {
			// Setup the mock to return an error
			vi.mocked(global.fetch).mockResolvedValueOnce({
				ok: false,
			} as Response);

			// Assert that calling the function throws an error
			await expect(shortenUrl("https://example.com")).rejects.toThrow(
				"Failed to shorten URL",
			);
		});
	});

	describe("getLongUrl", () => {
		it("should return URL data when successful", async () => {
			// Mock response data
			const mockResponse: BaseResType = {
				id: "123",
				url: "https://example.com",
				shortCode: "abc123",
				createdAt: "2023-01-01T00:00:00.000Z",
				updatedAt: "2023-01-01T00:00:00.000Z",
				count: 1,
			};

			// Setup the mock
			vi.mocked(global.fetch).mockResolvedValueOnce({
				ok: true,
				json: async () => ({ data: mockResponse }),
			} as Response);

			// Call the function
			const result = await getLongUrl("abc123");

			// Assertions
			expect(global.fetch).toHaveBeenCalledWith("/api/abc123", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			expect(result).toEqual(mockResponse);
		});

		it("should throw an error when the API call fails", async () => {
			// Setup the mock to return an error
			vi.mocked(global.fetch).mockResolvedValueOnce({
				ok: false,
			} as Response);

			// Assert that calling the function throws an error
			await expect(getLongUrl("abc123")).rejects.toThrow(
				"Failed to get long URL",
			);
		});
	});
});
