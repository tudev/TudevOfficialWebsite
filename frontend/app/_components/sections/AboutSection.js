import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

function AboutSection() {
  return (
    <>
      <section id="about" className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="">
                <Image
                  src="/images/logo-red.png"
                  alt="TUDev logo"
                  className="img-fluid"
                  width={40}
                  height={40}
                />
                <br />
                <br />
                <h2>What We Do</h2>
                <p className="text-muted">
                  We are a community of designers, developers, hackers, and
                  makers.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4}>
              <h1>
                <i className="bi bi-lightning"></i>
              </h1>
              <h3 style={{ fontWeight: 500 }}>Hackathons</h3>
              <p className="text-muted">
                We attend tons of hackathons throughout the year. We were ranked
                by Major League Hacking as the 14th most active hacking
                community in North America for the Spring 2016 season.
              </p>
            </Col>
            <Col md={4}>
              <h1>
                <i className="bi bi-motherboard-fill"></i>
              </h1>
              <h3 style={{ fontWeight: 500 }}>Code Demos</h3>
              <p className="text-muted">
                We host several hands-on programming demos throughout the
                semester on topics like Python, Twitter Scraping, or Chrome
                Extensions. No coding experience required!
              </p>
            </Col>
            <Col md={4}>
              <h1>
                <i className="bi bi-people"></i>
              </h1>
              <h3 style={{ fontWeight: 500 }}>Networking</h3>
              <p className="text-muted">
                Getting involved with TUDev means surrounding yourself with
                other smart, motivated hackers and a talented and growing alumni
                network, leading to more opportunities down the road.
              </p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={12}>
              <Link className="btn btn-outline btn-xl disabled" href="/about">
                {" "}
                Find Out More
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutSection;
