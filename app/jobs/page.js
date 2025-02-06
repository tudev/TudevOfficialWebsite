"use client";

import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import SecondaryHeader from "../_components/headers/SecondaryHeader";
import Link from "next/link"; // Import Link from Next.js for client-side navigation

import { JOBPOSTINGS } from "../_shared/JOBS";

// Sample data for job postings
const jobPostings = JOBPOSTINGS;

function JobsPage() {
  return (
    <>
      <SecondaryHeader
        title="Join Our Team"
        subtitle="Explore open positions at TUDev"
      />
      <Container className="my-5">
        {jobPostings.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`} passHref legacyBehavior>
            <Card
              tag="a"
              className="mb-4 text-decoration-none"
              style={{ cursor: "pointer" }}
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
        ))}
      </Container>
    </>
  );
}

export default JobsPage;
