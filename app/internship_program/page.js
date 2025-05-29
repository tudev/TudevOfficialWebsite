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
} from "reactstrap";
import { HeartHandshake } from "lucide-react";
import SecondaryHeader from "../_components/headers/SecondaryHeader";
import Link from "next/link";

function InternshipPage() {
  const [internships, setInternships] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternships = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CMS_URL}/items/volunteer_roles?fields=*`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch internship roles");
        }

        const data = await res.json();
        setInternships(data.data);
        setError(null);
      } catch (err) {
        console.log(`An error occurred: ${err.message}`);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInternships();
  }, []);

  return (
    <>
      <SecondaryHeader
        title="Internship Program"
        subtitle="Grow your skills with TUDev"
      />
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={7}>
              <p>
                TUDev&apos;s Internship Program is designed for students who want to
                gain hands-on experience in tech, leadership, and community
                engagement. As an intern, you&apos;ll contribute to real projects,
                collaborate with team leads, and develop skills that extend
                beyond the classroom.
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
                Whether you&apos;re interested in tech event planning, project
                coordination, content creation, or outreach, our internship
                program provides a structured way to grow professionally in a
                supportive environment. Positions are unpaid but offer valuable
                mentorship, experience, and leadership development opportunities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="my-5">
        <Row>
          <Col lg={12}>
            <h2>Available Internships</h2>
          </Col>
        </Row>
        <Row>
          {loading && (
            <Row>
              <Col>
                <p>Loading internship roles...</p>
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
              {internships.map((role) => (
                <Col key={role.id} lg={4} md={6} sm={12} xs={12} className="mb-4">
                  <Link
                    href={`/internship_program/${role.id}`}
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
                        <CardTitle tag="h3">{role.title}</CardTitle>
                        <CardText>{role.description}</CardText>
                        <CardText>
                          <strong>Requirements:</strong>
                          <ul>
                            {role.requirements?.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </CardText>
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

export default InternshipPage;
