"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Spinner
} from "reactstrap";
import SecondaryHeader from "../../_components/headers/SecondaryHeader";


export default function VoulunteerDetailsPage({ params }) {
  const { id } = params;
  const router = useRouter();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/items/volunteer_roles/${id}?fields=*`);

        if (!res.ok) {
          if (res.status === 404) {
            router.replace("/404");
            return;
          }
          throw new Error("Failed to fetch volunteer posting")
        }

        const data = await res.json();
        setJob(data.data);

      } catch (err) {
        console.error(err);
        setError(err.message || "An error has occured")

      } finally {
        setLoading(false)
      }
    }
    fetchJob();
  }, [id, router])

  if (loading) {
    return (
      <>
        <SecondaryHeader title="Hang tight" subtitle="It's loading" />
        <Container className="my-5 text-center">
          <Spinner color="primary" />
          <p>Loading role...</p>
        </Container>
      </>
    )
  }

  if (error || !job) {
    return (
      <>
        <SecondaryHeader title="Hang tight" subtitle="It's loading" />
        <Container className="my-5 text-center">
          <p style={{ color: "red" }}>{error || "Role not found."}</p>
        </Container>
      </>
    );
  }

  return (
    <>
      <SecondaryHeader title={job.title} subtitle="Role Details" />
      <Container className="my-5">
        <Card>
          <CardBody>
            <CardTitle tag="h3">{job.title}</CardTitle>
            <CardText>{job.description}</CardText>
            <CardText>
              <strong>Requirements:</strong>
              <ul>
                {job.requirements?.map((req, index) => <li key={index}>{req}</li>)}
              </ul>
              <p>
                Please make sure to apply using your TU email. Cannot access
                application without being logged in.
              </p>
            </CardText>
            <Button
              color="primary"
              onClick={() => {
                window.open(
                  `${job.apply_link}`,
                  `_blank`,
                  "noopener,noreferrer"
                );
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
