import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeroHeader42_RmHrNc3L.css";
import image1 from "../assets/image.png";
import image2 from "../assets/image2.png";

const HeroHeader42_RmHrNc3L = () => {
  return (
    <header className="ezy__header42_RmHrNc3L">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={7} className="text-center text-lg-start mb-5 mb-lg-0">
            <h2 className="ezy__header42_RmHrNc3L-heading mb-4">
              Find Your Dream Property Today!
            </h2>
            <Row>
              <Col xs={12} lg={10}>
                {/* New Offer Section */}
              {/* Offer card for limited-time early buyers */}
{/* <div className="offer-card">
  <h3 className="offer-title">🚀 Limited-Time Offer for Early Buyers! 🎉</h3>
  <p className="offer-text">
    Be among the <strong>first 5 buyers</strong> of properties worth{" "}
    <strong>₹X, ₹Y, or ₹Z</strong> and receive a{" "}
    <strong>1% capital amount cashback every 3 years!</strong>
  </p>
  <button className="offer-btn">Claim Your Offer Now</button>
</div> */}

{/* Announcement for upcoming launch with a special offer */}
<div className="offer-card">
  <h3 className="offer-title">Stay Tuned for a Historic Launch! </h3>
  <p className="offer-text">
    We are launching an offer for the <strong>first time in India!</strong>{" "}
    Stay tuned to avail something exciting and exclusive. 
  </p>
  <button className="offer-btn">Stay Updated</button>
</div>

              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={5} className="position-relative text-center">
            <div className="imagesDiv">
              <img  style={{
    marginRight: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "15px"
  }}
                src={image1}
                alt="Luxury Property"
                className="img-fluid ezy__header42_RmHrNc3L-img"
              />
              <img style={{
    
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
     borderRadius: "15px"
  }}
                src={image2}
                alt="Modern Apartment"
                className="img-fluid ezy__header42_RmHrNc3L-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeroHeader42_RmHrNc3L;
