export default async function Page() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	// throw Error("oops");

	return (
		<main>
			<h1>Hello World</h1>
		</main>
	);
}
