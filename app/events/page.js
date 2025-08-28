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
import { format } from "date-fns";
import Link from "next/link";
import EventCard from "../_components/cards/EventCard";

import SecondaryHeader from "../_components/headers/SecondaryHeader";



function EventPage() {
  const [upcomingEvents, setEvents] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CMS_URL}/items/events?fields=*&filter[status][_eq]=published`
        );

        if (!res.ok) {
          throw new Error(`Http error! status: ${res.status}`)
        }

        const data = await res.json();
        console.log("This is the data fetched: ", data.data)
        setEvents(data.data)
        setError(null)
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError("Unable to load events. Please try again later.")
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, [])


  return (
    <>
      <SecondaryHeader title="Events" subtitle="What is happening" />

      <section>
        <Container className="py-5">
          {" "}
          <Row className="mb-4">
            <Col lg={12}>
              <h2>Upcoming Events</h2>
            </Col>
          </Row>
          <Row>
            {loading && (
              <Col className="text-center mb-4">
                <p>Loading ...</p>
              </Col>
            )}
            {error && (
              <Col className="text-center mb-4">
                <p>{error}</p>
              </Col>
            )}
            {!loading && !error && upcomingEvents.length === 0 && (
              <Col className="text-center mb-4">
                <h4>Currently No Events</h4>
                <p>Please check back later!</p>
              </Col>
            )}
            {!loading && !error && upcomingEvents.length > 0 && (
              (upcomingEvents.map((upcomingEvent) => {
                return (
                  <Col key={upcomingEvent.id}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="mb-4">
                    <EventCard event={upcomingEvent} />
                  </Col>
                );
              }))
            )}
            {/* {events.length == 0 ? (
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
            )} */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EventPage;
