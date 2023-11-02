"use client";

import { UnsplashImage } from "@/models/unsplash-image";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner, Image, Alert } from "react-bootstrap";
import styles from "./SearchPage.module.css";

export default function SearchPage() {
	const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
		null
	);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const query = formData.get("query")?.toString().trim();

		if (query) {
			try {
				setSearchResults(null);
				setError(null);
				setIsLoading(true);
				const response = await fetch("/api/search?query=" + query);
				const images: UnsplashImage[] = await response.json();
				setSearchResults(images);
			} catch (error) {
				setError(error as Error);
			} finally {
				setIsLoading(false);
			}
		}
	}

	return (
		<>
			<Alert variant="primary">
				This page fetches data <strong>client-side</strong>. In order to not
				leak Api credentials, the api call is proxied through the NextJS server.
			</Alert>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="search-input">
					<Form.Label>Search query</Form.Label>
					<Form.Control
						type="text"
						name="query"
						placeholder="e.g. cats, hotdogs, ...."
					/>
				</Form.Group>

				<Button type="submit" className="mb-3" disabled={isLoading}>
					Search
				</Button>
			</Form>

			<div className="d-flex flex-column align-items-center">
				{isLoading && <Spinner animation="border" />}
				{error && <p className="text-danger">{error.message}</p>}
				{searchResults?.length === 0 && <p>No results found</p>}
			</div>

			{searchResults && (
				<>
					{searchResults.map((image) => (
						<Image
							src={image.urls.raw}
							width={250}
							height={250}
							alt={image.description ?? "Unsplash Image"}
							key={image.urls.raw}
							className={styles.image}
						/>
					))}
				</>
			)}
		</>
	);
}
