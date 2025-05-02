"use client";

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { HeartHandshake } from "lucide-react";
import SecondaryHeader from "../_components/headers/SecondaryHeader";
import Link from "next/link"; // Import Link from Next.js for client-side navigation

import { JOBPOSTINGS } from "../_shared/JOBS";

// Sample data for job postings
const jobPostings = JOBPOSTINGS;

function VolunteerPage() {
  return (
    <>
      <SecondaryHeader
        title="Volunteer to Join Our Team"
        subtitle="Explore open positions at TUDev"
      />
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={7}>
              <p>
                Join TUDev's leadership team as a volunteer officer and help
                shape the future of technology at our university. As a
                volunteer, you'll have the opportunity to work on impactful
                projects, organize events, and contribute to our thriving tech
                community. While these positions are unpaid, they offer valuable
                leadership experience and the chance to serve on TUDev's officer
                board. You'll gain hands-on experience in project management,
                event planning, and community building, while working alongside
                passionate peers who share your interest in technology.
              </p>
            </Col>
            <Col>
              <h1>
                <HeartHandshake style={{ color: "#a41e35", width: "48px" }} />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col md={7}>
              <p>
                Our volunteers play a crucial role in TUDev's success, helping
                to create opportunities for students to learn, connect, and grow
                their technical skills. Whether you're interested in leading
                workshops, managing our social media presence, or coordinating
                with industry partners, there's a place for you on our team.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="my-5">
        <Row>
          <Col lg={12}>
            <h2>Current Openings</h2>
          </Col>
        </Row>
        <Row>
          {jobPostings.map((job) => (
            <Col lg={4} md={6} sm={12} xs={12} className="mb-4">
              <Link
                key={job.id}
                href={`/volunteer/${job.id}`}
                passHref
                legacyBehavior
                style={{ textDecoration: "none" }}
              >
                <Card
                  tag="a"
                  className="mb-4 text-decoration-none mx-auto"
                  style={{
                    cursor: "pointer",
                    maxHeight: "250px",
                    height: "100%",
                    overflow: "auto",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h3">{job.title}</CardTitle>
                    <CardText>{job.description}</CardText>
                    <CardText>
                      <strong>Requirements:</strong>
                      <ul>
                        {job.requirements.map((requirement, index) => (
                          <li key={index}>{requirement}</li>
                        ))}
                      </ul>
                    </CardText>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default VolunteerPage;
