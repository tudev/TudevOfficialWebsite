"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { Calendar, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation";

const EventDetailPage = () => {
  const params = useParams();
  const eventId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_CMS_URL}/items/events/${eventId}?fields=*,event_image.id,event_image.filename_disk&filter[status][_eq]=published`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch event: ${response.status}`);
        }

        const eventData = await response.json();
        setEvent(eventData.data);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!eventId) {
      setLoading(false);
      setError("Missing event id.");
      return;
    }

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  if (loading) {
    return (
      <Container className="mt-5 py-5">
        <Row>
          <Col md={8} className="mx-auto text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading event...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5 py-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card>
              <CardBody className="text-center">
                <CardTitle tag="h2" className="text-danger">
                  Error
                </CardTitle>
                <CardText>Failed to load event: {error}</CardText>
                <Link className="btn btn-dark" href="/events">
                  ← Back to all events
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  if (!event) {
    return (
      <Container className="mt-5 py-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card>
              <CardBody className="text-center">
                <CardTitle tag="h2">Event Not Found</CardTitle>
                <CardText>The requested event could not be found.</CardText>
                <Link className="btn btn-dark" href="/events">
                  ← Back to all events
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  const formattedDate = event.start_time
    ? format(new Date(event.start_time), "EEEE MMMM do yyyy")
    : "TBD";

  const formattedTime = event.start_time
    ? format(new Date(event.start_time), "h:mma")
    : null;

  const formattedEndTime = event.end_time
    ? format(new Date(event.end_time), "h:mma")
    : null;

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content={event.description?.substring(0, 160) || ""}
        />
      </Head>
      <Container className="mt-5 py-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card>
              {event.image ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_CMS_URL}/assets/${event.image}`}
                  className="img-fluid rounded-top"
                  alt={event.title || "Event image"}
                />
              ) : (
                <div
                  style={{ height: "240px", backgroundColor: "rgba(0,0,0,0.05)" }}
                  aria-hidden="true"
                />
              )}
              <CardBody>
                <CardTitle tag="h1" className="mb-3">
                  {event.title}
                </CardTitle>

                <div className="d-flex align-items-center mb-2">
                  <Calendar className="me-2" size={18} />
                  <CardText className="mb-0">{formattedDate}</CardText>
                </div>

                {formattedTime && (
                  <div className="d-flex align-items-center mb-2">
                    <Clock className="me-2" size={18} />
                    <CardText className="mb-0">
                      {formattedTime}
                      {formattedEndTime ? ` - ${formattedEndTime}` : ""}
                    </CardText>
                  </div>
                )}

                {event.location && (
                  <div className="d-flex align-items-center mb-3">
                    <MapPin className="me-2" size={18} />
                    <CardText className="mb-0">{event.location}</CardText>
                  </div>
                )}

                {event.description &&
                  event.description.split("\n\n").map((paragraph, index) => (
                    <CardText key={index}>{paragraph}</CardText>
                  ))}

                <Link className="btn btn-dark" href="/events">
                  ← Back to all events
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EventDetailPage;
