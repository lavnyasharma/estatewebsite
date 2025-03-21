import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Navigation2_XFIV6BGR.css";
import logo from "../assets/logo.png";

const routes = [
	// { name: "Home", href: "#" },
	// { name: "Why us?", href: "#" },
	// { name: "Download", href: "#" },
];



// NavMenu.propTypes = {
// 	routes: PropTypes.array.isRequired,
// };

const Navigation2_XFIV6BGR = () => {
	return (
		<div className="ezy__nav2_XFIV6BGR">
			<Navbar expand="lg" className="py-3">
				<Container>
					<Navbar.Brand href="#">
						<img src={logo} alt="Logo" height="100" />
					</Navbar.Brand>
					{/* <Navbar.Toggle aria-controls="ezy__nav2_XFIV6BGR-navbar-nav">
						<span>
							<span />
						</span>
					</Navbar.Toggle> */}
					<Navbar.Collapse id="ezy__nav2_XFIV6BGR-navbar-nav">
						{/* <NavMenu routes={routes} /> */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation2_XFIV6BGR;