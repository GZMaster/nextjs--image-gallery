"use client";

import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
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
						<NavDropdown title="Topics" id="topics-dropdown">
							<NavDropdown.Item as={Link} href="/topics/cats">
								cats
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/topics/dogs">
								dogs
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/topics/birds">
								birds
							</NavDropdown.Item>
							<Nav.Link
								as={Link}
								href="/search"
								active={pathName === "/search"}
							>
								search
							</Nav.Link>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
