import React from "react";
import { Container, Row, Col } from "reactstrap";

const SecondaryHeader = ({ title, subtitle, description }) => {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(98, 18, 32, .9)", // Black overlay with 50% opacity
    zIndex: 1, // Ensures overlay is on top of the background image
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2, // Ensures content is above the overlay
  };
  return (
    <div>
      {/* Site Header */}
      <header
        style={{
          height: "400px",
          backgroundImage:
            "url(https://news.temple.edu/sites/news/files/styles/article_hero/public/20170731_stock_025_938x528.jpg?itok=1PTw9srE&c=ec04b0b386a8865d81daa22bcadb37d0)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={overlayStyle}></div>
        <Container style={contentStyle} className="pt-5 mb-4 text-white">
          <Row>
            <Col>
              <div className="header-content">
                <div className="header-content-inner">
                  <h2 className="display-2">{title}</h2>
                  <h4 className="display-4">{subtitle}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default SecondaryHeader;
