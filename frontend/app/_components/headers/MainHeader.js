import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { SOCIALINKS, OWLCONNECT } from "@/app/_shared/LINKS";
import Link from "next/link";

function MainHeader() {
  const discordLink = SOCIALINKS.find((link) => link.name === "Discord");

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(98, 18, 32, .5)", // Black overlay with 50% opacity
    zIndex: 1, // Ensures overlay is on top of the background image
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2, // Ensures content is above the overlay
  };

  return (
    <>
      <header
        id="mainHeader"
        style={{
          height: "700px",
        }}
      >
        <video
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          id="video"
          className="splash-video"
          autoPlay
          loop
          muted
        >
          <source src="/videos/owl-video.mp4" type="video/mp4" />
        </video>
        <div style={overlayStyle}>
          <Container style={contentStyle} className="pt-5 mb-4 text-white">
            <div className="header-content">
              <Row>
                <Col md={7}>
                  <div className="header-content-inner">
                    <h1 className="display-1">TUDev</h1>
                    <h5 className="display-5">
                      Temple University&apos;s community of{" "}
                      <b>hackers &amp; makers</b>
                    </h5>
                    <p>
                      Our vibrant community of hackers and makers is dedicated
                      to innovation, creativity, and collaboration. Whether you
                      &apos;re a seasoned coder or a curious beginner, TUDev
                      provides a dynamic environment to explore technology,
                      develop new skills, and work on exciting projects. Join us
                      to connect with like-minded peers, participate in hands-on
                      workshops, and make your ideas a reality. At TUDev,
                      we&apos;re not just building tech; we&apos;re building the
                      future.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Link
                    className="btn btn-xl"
                    target="_blank"
                    rel="norefferer"
                    style={{
                      color: "white",
                      backgroundColor: "#a41e35",
                      outlineColor: "#a41e35",
                    }}
                    href={discordLink.href}
                  >
                    Join Discord <i className="bi bi-discord" />
                  </Link>{" "}
                  <Link
                    className="btn btn-xl"
                    target="_blank"
                    rel="norefferer"
                    style={{
                      color: "white",
                      backgroundColor: "#a41e35",
                      outlineColor: "#a41e35",
                    }}
                    href={OWLCONNECT}
                  >
                    Join The Club <i className="bi bi-people-fill" />
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
