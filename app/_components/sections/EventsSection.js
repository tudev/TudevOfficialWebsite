import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import Link from "next/link";
import EventCard from "../cards/EventCard";


function EventsSection() {
  const [upcomingEvents, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        // console.log("This is the data fetched: ", data.data)
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
      <section
        id="events"
        className="py-5"
        style={{ backgroundColor: "#621220" }}
      >
        <Container>
          <Row>
            <Col lg={2}>
              <h2 style={{ color: "white" }}>Upcoming Events</h2>
            </Col>
          </Row>
          {loading && (
            <Row>
              <Col>
                <p style={{ color: "white" }}>Loading events...</p>
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

          {!loading && !error && upcomingEvents.length === 0 && (
            <Row>
              <Col className="text-center text-white mb-4">
                <h4>Currently No Events</h4>
                <p>Please check back later!</p>
              </Col>
            </Row>
          )}

          {!loading && !error && upcomingEvents.length > 0 && (
            <Row>
              {upcomingEvents.map((upcomingEvent) => (
                <Col key={upcomingEvent.id}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-4">
                  <EventCard event={upcomingEvent} />
                </Col>
              ))}
            </Row>
          )}
          {/* <Row>
            {events.length == 0 ? (
              <Col className="text-center text-white mb-4">
                <h4>Currently No Events</h4>
                <p>Please check back later!</p>
              </Col>
            ) : (
              events.map((event) => {
                return (
                  <Col
                    key={event.id}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="mb-4"
                  >
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
          </Row> */}
          <Row className="text-center">
            <Col md={12}>
              <Link
                className="btn btn-xl"
                style={{
                  color: "white",
                  backgroundColor: "#a41e35",
                  outlineColor: "#a41e35",
                }}
                href="/events"
              >
                {" "}
                See All Events
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EventsSection;
