import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faBehance,
	faDribbble,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./Copyright5_76MXLqEs.css";

const socialLinks = [
	{
		icon: faFacebook,
		href: "",
	},
	{
		icon: faInstagram,
		href: "https://www.instagram.com/propertygiants.in?igsh=MWs0bTN6eTI1YnJ3",
	},
	// {
	// 	icon: faDribbble,
	// 	href: "",
	// },
	// {
	// 	icon: faBehance,
	// 	href: "",
	// },
];

const SocialLinks = () => (
	<Nav className="ezy__copyright5_76MXLqEs-social">
		{socialLinks.map((link, i) => (
			<li key={i}>
				<a href={link.href} target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={link.icon}  />
				</a>
			</li>
		))}
	</Nav>
);


const Copyright5_76MXLqEs = () => {
	return (
		<section className="ezy__copyright5_76MXLqEs text-center text-lg-start pt-5 pb-5">
			<Container>
				<Row className="d-flex justify-content-between align-items-center">
					<Col
						lg={4}
						className="d-flex justify-content-center justify-content-lg-start"
					>
						<SocialLinks />
					</Col>
					<Col lg={4}>
						<p className="text-center text-lg-end mb-lg-0">
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Copyright5_76MXLqEs;

