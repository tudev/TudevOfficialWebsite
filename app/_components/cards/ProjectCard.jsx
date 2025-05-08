import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from "reactstrap";
import Link from "next/link";

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

function limitSentence(str, limit) {
  const sentences = str.match(/[^.!?]+[.!?]*/g);

  if (sentences) {
    return sentences.slice(0, limit).join(" ").trim();
  }

  return str;
}

const ProjectCard = ({ project }) => {
  const {
    id,
    project_title,
    project_author,
    project_description,
    project_date,
    tags,
  } = project;

  return (
    <Link style={{ textDecoration: "none" }} href={`projects/${id}`}>
      <Card style={{ minHeight: "250px", height: "100%", overflow: "auto" }}>
        <CardBody>
          <CardTitle tag="h5" className="mb-2">
            {project_title}
          </CardTitle>
          <CardSubtitle className="mb-4">
            By {project_author} | Presented on {project_date}
          </CardSubtitle>
          <CardText>{limitSentence(project_description, 2)}</CardText>
          <div className="d-flex gap-2">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => {
                if (tags.length === 0) {
                  return null;
                }
                return (
                  <Badge key={index} variant="secondary" className="me-1">
                    {tag}
                  </Badge>
                );
              })}
            </div>
            {/* {projectLink ? (
            <Link
              className="btn btn-secondary"
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Link
            </Link>
          ) : (
            <span className="btn btn-secondary disabled">No Link</span>
          )}
          {githubLink && (
            <Link
              className="btn btn-dark d-flex align-items-center gap-2"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </Link>
          )} */}
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
