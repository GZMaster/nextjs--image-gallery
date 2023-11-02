import { Alert } from "@/components/bootstrap";
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "static Fetching - NextJS Image Gallery",
};

export default async function Page() {
	const response = await fetch(
		"https://api.unsplash.com/photos/random?client_id=" +
			process.env.UNSPLASH_ACCESS_KEY
	);
	const image: UnsplashImage = await response.json();

	const width = Math.min(image.width, 500);
	const height = (width / image.width) * image.height;

	return (
		<div className="d-flex flex-column align-items-center">
			<Alert variant="primary">
				This page <strong>Fetches and caches data at build time</strong> even
				though the unsplash API always return a new image
			</Alert>
			<Image
				src={image.urls.raw}
				width={width}
				height={height}
				alt={image.description ?? "Unsplash Image"}
				className="rounded shadow mw-100 h-100"
			/>
			by{" "}
			<Link href={"/users/" + image.user.username}>{image.user.username}</Link>
		</div>
	);
}
