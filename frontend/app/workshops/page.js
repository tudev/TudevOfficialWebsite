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
      <section>
        {workshops.length > 0 ? (
          workshops.map((workshop) => (
            <article key={workshop.id} className="workshop-card">
              <img
                src={workshop.image}
                alt={workshop.title}
                className="workshop-image"
              />
              <h2>{workshop.title}</h2>
              <p>{workshop.description}</p>
              <p>
                <strong>Date:</strong> {workshop.date}
              </p>
              <p>
                <strong>VIP Attendee:</strong> {workshop.vip.name} (
                {workshop.vip.discordId})
              </p>
            </article>
          ))
        ) : (
          <p className="no-workshops">No Workshops</p>
        )}
      </section>
      <style jsx>{`
        main {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: auto;
          padding: 20px;
        }
        header {
          text-align: center;
        }
        .workshop-card {
          background: #f9f9f9;
          padding: 15px;
          margin: 15px 0;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .workshop-card h2 {
          margin: 0 0 10px;
        }
      `}</style>
      {/* <Container className="mt-4">
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
      </Container> */}
    </>
  );
}

export default WorkshopPage;
