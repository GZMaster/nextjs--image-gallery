"use client";

import { Button } from "react-bootstrap";

interface ErrorProps {
	error: Error;
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	return (
		<main>
			<h1>Error ⚠️</h1>
			<p>an error occurred</p>
			<Button onClick={reset}>try again</Button>
		</main>
	);
}
