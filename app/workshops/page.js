"use client";

import React from "react";
import { Container, Card, CardBody, CardTitle, CardText } from "reactstrap";
import SecondaryHeader from "../_components/headers/SecondaryHeader";
import { WORKSHOPS } from "../_shared/WORKSHOPS";

function WorkshopPage() {
  const workshops = WORKSHOPS;
  return (
    <>
      <SecondaryHeader title="Workshops" subtitle="Our workshops" />
      <Container className="mt-4">
        {workshops.map((workshop) => (
          <Card key={workshop.id} className="mb-3">
            <CardBody>
              <CardTitle tag="h5">{workshop.title}</CardTitle>
              <CardText>{workshop.description}</CardText>
              <CardText>
                <small className="text-muted">Date: {workshop.date}</small>
              </CardText>
              <CardText>
                <strong>VIP Attendee: </strong> {workshop.vip.name} (
                {workshop.vip.discordId})
              </CardText>
            </CardBody>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default WorkshopPage;
