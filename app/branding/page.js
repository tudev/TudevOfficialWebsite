"use client";

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import SecondaryHeader from "../_components/headers/SecondaryHeader";

function BrandingPage() {
  return (
    <>
      {/* Site Header */}
      <SecondaryHeader title="Branding" subtitle="Our Brand Guidelines" />

      {/* Introduction */}
      <section className="my-5">
        <Container>
          <Row>
            <Col>
              <h3>About TUDev</h3>
              <p>
                TUDev is Temple University’s hacker/maker community! Our goal is
                to get students excited about technology beyond formal
                academics. We focus on simplicity, modernity, and optimism in
                our branding.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Branding Details */}
      <section className="bg-light my-5">
        <Container>
          <Row>
            <Col>
              <h3>Official Name</h3>
              <p>
                The correct way to write our name is <strong>TUDev</strong>.
                Avoid incorrect variations like &quot;TU Dev" or "tuDev.&quot;
              </p>

              <h3>Official Logo</h3>
              <p>
                TUDev&apos;s logo represents our identity. There are two
                versions: a solid version and an outlined version. Only use
                approved versions available on our{" "}
                <a
                  href="https://github.com/tudev/assets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Assets Repository
                </a>
                .
              </p>

              <h3>Brand Colors</h3>
              <ul>
                <li>
                  <strong>Cherry Red</strong> (#A41E35) - Our primary brand
                  color.
                </li>
                <li>
                  <strong>Black</strong> (#222222), <strong>Grey</strong>{" "}
                  (#899197) - Supporting colors.
                </li>
                <li>
                  Additional colors: Pink, UN Blue, Seafoam, Yellow, and Intl.
                  Orange.
                </li>
              </ul>

              <h3>Typography</h3>
              <p>
                Our main font for digital content is <strong>Roboto</strong>.
                Alternate fonts: Ubuntu, Arial (web), and Garamond (print).
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="my-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Join TUDev</h3>
              <p>
                Want to be part of Temple's hacker and maker community? Get
                involved and explore new technologies with us!
              </p>
              <Button color="danger" href="mailto:tudev@temple.edu">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Branding Guide Download */}
      <section className="bg-light my-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Download Branding Guidelines</h3>
              <p>You can download the complete TUDev Brand Guidelines below:</p>
              <Button
                color="primary"
                href="/files/TUDev_Brand_Guidelines.pdf"
                download
              >
                Download PDF
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default BrandingPage;
