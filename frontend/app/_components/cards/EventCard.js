import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";
import { Calendar, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";

const EventCard = ({ event }) => {
  // Format start and end times
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
    <Card className="w-100 h-100 mx-auto" style={{ maxWidth: "400px" }}>
      {event.image ? (
        <CardImg
          top
          width="100%"
          src={process.env.NEXT_PUBLIC_CMS_URL + "/assets/" + event.image}
          alt={event.title || "Event image"}
          style={{ objectFit: "cover", maxHeight: "200px" }}
        />
      ) : (
        <div
          style={{ height: "200px", backgroundColor: "rgba(0,0,0,0.05)" }}
          aria-hidden="true"
        />
      )}
      <CardBody className="d-flex flex-column">
        {/* Title */}
        <CardTitle tag="h5">{event.title}</CardTitle>

        {/* Date */}
        <div className="d-flex align-items-center mb-2">
          <Calendar className="me-2" size={18} />
          <CardText className="mb-0">{formattedDate}</CardText>
        </div>

        {/* Time */}
        {formattedTime && (
          <div className="d-flex align-items-center mb-2">
            <Clock className="me-2" size={18} />
            <CardText className="mb-0">
              {formattedTime}
              {formattedEndTime ? ` - ${formattedEndTime}` : ""}
            </CardText>
          </div>
        )}

        {/* Location (if present) */}
        {event.location && (
          <div className="d-flex align-items-center mb-2">
            <MapPin className="me-2" size={18} />
            <CardText className="mb-0">{event.location}</CardText>
          </div>
        )}

        {/* Description */}
        {event.description && (
          <CardText
            className="mt-3"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {event.description}
          </CardText>
        )}
      </CardBody>
    </Card>
  );
};

export default EventCard;
