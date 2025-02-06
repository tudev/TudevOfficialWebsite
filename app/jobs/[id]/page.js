"use client";

import { notFound } from "next/navigation";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import SecondaryHeader from "../../_components/headers/SecondaryHeader";
import { JOBPOSTINGS } from "@/app/_shared/JOBS";

// Sample data for job postings
const jobPostings = JOBPOSTINGS;

export default function JobDetailsPage({ params }) {
  const { id } = params;

  // Find the job posting by id
  const job = jobPostings.find((job) => job.id === parseInt(id));

  // If the job is not found, return a 404 page
  if (!job) {
    notFound();
  }

  return (
    <>
      <SecondaryHeader title={job.title} subtitle="Job Details" />
      <Container className="my-5">
        <Card>
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
            <Button
              color="primary"
              onClick={() => {
                window.location.href = `mailto:tudev@temple.edu?subject=Application for ${job.title}`;
              }}
            >
              Apply Now
            </Button>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
