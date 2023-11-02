import { UnsplashImage } from "@/models/unsplash-image";
import { Alert } from "@/components/bootstrap";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Metadata } from "next";

interface PageProps {
	params: { topic: string };
	// searchParams: URLSearchParams;
}

// export const dynamicParams = false;

export function generateStaticParams() {
	return ["cats", "dogs", "birds"].map((topic) => ({ topic }));
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
	return {
		title: topic + " - NextJS Image Gallery",
	};
}

export default async function Page({ params: { topic } }: PageProps) {
	const response = await fetch(
		`https://api.unsplash.com/photos/random?&query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
		{
			// cache: "no-cache"/"no-store"/"reload"/"force-cache"/"only-if-cached",
			// next: { revalidate: 0 },
		}
	);
	const images: UnsplashImage[] = await response.json();

	return (
		<div>
			<Alert>
				This page uses <strong>generateStaticParams</strong> to render a static
				page for each topic
			</Alert>

			<h1>{topic}</h1>
			{images.map((image) => (
				<Image
					src={image.urls.raw}
					width={250}
					height={250}
					alt={image.description ?? "Unsplash Image"}
					key={image.urls.raw}
					className={styles.image}
				/>
			))}
		</div>
	);
}
