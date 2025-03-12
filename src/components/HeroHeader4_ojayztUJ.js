import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HeroHeader4_ojayztUJ.css";

const HeroHeader4_ojayztUJ = () => {
	return (
		<section
			className="ezy__header4_ojayztUJ dark"
			style={{
				backgroundImage:
					"url(https://cdn.easyfrontend.com/pictures/construction/construction-banner.jpg)",
			}}
		>
			<Container className="position-relative">
				<Row className="align-items-center justify-content-center">
					<Col lg={12} className="text-center">
						<h2 className="ezy__header4_ojayztUJ-heading mb-4">
							Build Your Dream Home with Us
						</h2>
						<Row className="justify-content-center">
							<Col xs={12} lg={9}>
								<p className="ezy__header4_ojayztUJ-sub-heading px-5">
									Explore top-quality construction services, premium properties, and exclusive offers. 
									From modern apartments to luxurious villas, we help you find and build your perfect space.
								</p>
							</Col>
						</Row>
						<div className="mt-5">
							<p className="ezy__header4_ojayztUJ-registration-note">
								Download the app now to claim exclusive offers and view our latest properties!
							</p>
							<Button variant="" className="ezy__header4_ojayztUJ-btn m-1">
								<img
									src="https://cdn.easyfrontend.com/pictures/hero/play-app-android.png"
									alt="Download for Android"
								/>
							</Button>
							<Button variant="" className="ezy__header4_ojayztUJ-btn m-1">
								<img
									src="https://cdn.easyfrontend.com/pictures/hero/play-app-apple.png"
									alt="Download for iOS"
								/>
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HeroHeader4_ojayztUJ;
