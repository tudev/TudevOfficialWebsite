"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";
import SecondaryHeader from "../_components/headers/SecondaryHeader";

function AboutPage() {
  return (
    <>
      {/* Site Header */}
      <SecondaryHeader title="About Us" subtitle="Who we are, and what we do" />
      <section>
        <Container>
          <Row>
            <Col>This is a section for brief description</Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Row>
            <Col>This is a section for our officers and members roster</Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>This is a section for a call to action to join TUDev</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default AboutPage;
