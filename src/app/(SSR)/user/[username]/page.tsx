import { cache } from "react";
import { notFound } from "next/navigation";
import { UnsplashUser } from "@/models/unsplash-user";
import { Alert } from "@/components/bootstrap";

interface PageProps {
	params: { username: string };
	// searchParams: URLSearchParams,
}

async function getUser(username: string): Promise<UnsplashUser> {
	const response = await fetch(
		`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
		{
			// cache: "no-cache"/"no-store"/"reload"/"force-cache"/"only-if-cached",
			// next: { revalidate: 0 },
		}
	);

	if (response.status === 404) notFound();

	return await response.json();
}

// const getUserCached = cache(getUser);

export async function generateMetadata({ params: { username } }: PageProps) {
	const user = await getUser(username);

	return {
		title:
			[user.first_name, user.last_name].join(" ") ||
			user.username + "'s profile",
	};
}

export default async function Page({ params: { username } }: PageProps) {
	const user = await getUser(username);

	return (
		<div>
			<Alert>
				This page <strong>generateMetadata</strong> to set the page title
			</Alert>
			<h1>{user.username}</h1>
			<p>First name: {user.first_name}</p>
			<p>Last name: {user.last_name}</p>
			<a href={"https://unsplash.com/" + user.username}>Unsplash profile</a>
		</div>
	);
}
