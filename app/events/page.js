"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupText,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import Link from "next/link";
import EventCard from "../_components/cards/EventCard";

import { EVENTS2 } from "../_shared/EVENTS";
import SecondaryHeader from "../_components/headers/SecondaryHeader";

const events = EVENTS2;

function EventPage() {
  return (
    <>
      <SecondaryHeader title="Events" subtitle="What is happening" />

      <section>
        <Container className="py-5">
          {" "}
          <Row className="mb-4">
            <Col lg={12}>
              <h2>Upcoming Events</h2>
              {/* <p>Please use the search bar to find projects</p> */}
            </Col>
          </Row>
          <Row>
            {events.length == 0 ? (
              <Col className="text-center mb-4">
                <h4>Currently No Events</h4>
                <p>Please check back later!</p>
              </Col>
            ) : (
              events.map((event) => {
                return (
                  <Col key={event.id} lg={4} md={4} sm={6} className="mb-4">
                    <Link
                      style={{ textDecoration: "none" }}
                      href={event.eventLink}
                      target="_blank"
                    >
                      <EventCard event={event} />
                    </Link>
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EventPage;
