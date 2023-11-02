import { Alert } from "@/components/bootstrap";

export default function Home() {
	return (
		<div>
			<Alert variant="primary">
				<p>
					<strong>NextJS Image Gallery</strong> is a demo project to showcase
					different NextJS features.
				</p>

				<ul>
					<li>static generation</li>
					<li>server-side rendering</li>
					<li>incremental static regeneration</li>
					<li>client-side rendering</li>
					<li>meta-data API</li>
					<li>routing</li>
					<li>navigation</li>
					<li>bootstrap</li>
					<li>css modules</li>
					<li>typescript</li>
					<li>and more</li>
				</ul>

				<p className="mb-8">
					Every page uses a different combination of these features. You can
					inspect the source code to see how it works.
				</p>
			</Alert>
		</div>
	);
}
