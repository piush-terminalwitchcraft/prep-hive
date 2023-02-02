import React, { useState, useEffect } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

import styles from "./../styles/Header.module.css";
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [sticky, setSticky] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	const handleScroll = () => {
		if (window.scrollY > 180) {
			setSticky(true);
		} else if (window.scrollY < 180) {
			setSticky(false);
		}
	};

	const style = {
		backgroundColor: "#3B4252!important",
		color: "#ECEFF4!important",
	};
	return (
		<Navbar
			color="light"
			light
			container="md"
			expand="md"
			sticky={sticky ? "top" : ""}
			style={style}
		>
			<NavbarBrand href="/" style={style}>
				PrepHive
			</NavbarBrand>
			<NavbarToggler onClick={toggle} style={style} />
			<Collapse isOpen={isOpen} navbar style={style}>
				<Nav className="ms-auto" navbar style={style}>
					<Nav className="m-auto" navbar style={style}>
						<NavItem style={style}>
							<NavLink href="/" style={style}>
								Home
							</NavLink>
						</NavItem>
						<NavItem style={style}>
							<NavLink href="#feature" style={style}>
								Features
							</NavLink>
						</NavItem>
						<NavItem style={style}>
							<NavLink href="#about" style={style}>
								About
							</NavLink>
						</NavItem>
					</Nav>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
