"use client";

import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function NavBar() {
	const pathName = usePathname();

	return (
		<Navbar
			bg="primary"
			variant="dark"
			sticky="top"
			expand="sm"
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand as={Link} href="/">
					NextJS Image Gallery
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="main-navbar">
					<Nav>
						<Nav.Link as={Link} href="/static" active={pathName == "/static"}>
							static
						</Nav.Link>
						<Nav.Link as={Link} href="/dynamic" active={pathName == "/dynamic"}>
							dynamic
						</Nav.Link>
						<Nav.Link as={Link} href="/isr" active={pathName == "/isr"}>
							isr
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
