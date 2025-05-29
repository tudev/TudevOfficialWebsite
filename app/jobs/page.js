"use client";

import React, { useState, useEffect } from "react";
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
import { Briefcase } from "lucide-react";
import SecondaryHeader from "../_components/headers/SecondaryHeader";
import Link from "next/link";

function CareersPage() {
  const [jobPostings, setJobPostings] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobPostings = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CMS_URL}/items/volunteer_roles?fields=*`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch job postings");
        }

        const data = await res.json();
        setJobPostings(data.data);
        setError(null);
      } catch (err) {
        console.error(`An error occurred: ${err.message}`);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobPostings();
  }, []);

  return (
    <>
      <SecondaryHeader
        title="Join Our Team"
        subtitle="Explore internship opportunities at TUDev"
      />
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={7}>
              <p>
                TUDev is seeking passionate students to join our team through
                internship-style roles. Whether you're
                just starting out or looking to grow your skills in tech,
                leadership, or community building — we have positions where you
                can make an impact.
              </p>
              <p>
                These roles may be unpaid internships or volunteer-based at this
                time, but they provide hands-on experience, mentorship,
                leadership opportunities, and a chance to shape TUDev's
                direction and programming.
              </p>
            </Col>
            <Col>
              <h1>
                <Briefcase style={{ color: "#a41e35", width: "48px" }} />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col md={7}>
              <p>
                Open positions may involve organizing events, leading workshops,
                collaborating with student orgs, managing media and outreach, or
                developing internal tools. If you&apos;re ready to build something
                meaningful — we&apos;d love to have you on board.
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
          {loading && (
            <Row>
              <Col>
                <p>Loading job opportunities...</p>
              </Col>
            </Row>
          )}

          {error && (
            <Row>
              <Col>
                <p style={{ color: "red" }}>{error}</p>
              </Col>
            </Row>
          )}

          {!loading && !error && (
            <Row>
              {jobPostings.map((job) => (
                <Col
                  key={job.id}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-4"
                >
                  <Link
                    href={`/jobs/${job.id}`}
                    passHref
                    legacyBehavior
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
                        {job.requirements && job.requirements.length > 0 && (
                          <CardText>
                            <strong>Requirements:</strong>
                            <ul>
                              {job.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </CardText>
                        )}
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        </Row>
      </Container>
    </>
  );
}

export default CareersPage;
