"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Github, GithubIcon, Presentation } from "lucide-react";
import Head from "next/head.js";
import Link from "next/link.js";

const ProjectDetailPage = ({ params }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/items/projects/${params.id}?fields=*`);

        if (!response.ok) {
          throw new Error(`Failed to fetch project: ${response.status}`);
        }

        const projectData = await response.json();
        setProject(projectData.data);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  if (loading) {
    return (
      <Container className="mt-5 py-5">
        <Row>
          <Col md={8} className="mx-auto text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading project...</p>
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
                <CardTitle tag="h2" className="text-danger">Error</CardTitle>
                <CardText>Failed to load project: {error}</CardText>
                <Link className="btn btn-dark" href="/projects">
                  ← Back to all projects
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  if (!project) {
    return (
      <Container className="mt-5 py-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card>
              <CardBody className="text-center">
                <CardTitle tag="h2">Project Not Found</CardTitle>
                <CardText>The requested project could not be found.</CardText>
                <Link className="btn btn-dark" href="/projects">
                  ← Back to all projects
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  const {
    project_title,
    project_image,
    project_description,
    project_author,
    project_date,
    project_links = [],
  } = project;
  console.log(project)
  return (
    <>
      <Head>
        <title>{project_title}</title>
        <meta
          name="description"
          content={project_description?.substring(0, 160) || ''}
        />
      </Head>
      <Container className="mt-5 py-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card>
              <CardBody>
                <CardTitle tag="h1">{project_title}</CardTitle>
                <CardText tag="h6" className="mb-2 text-muted">
                  By {project_author} | Presented on {project_date}
                </CardText>
                {!project_image ? (
                  <img
                    src="https://picsum.photos/400/150"
                    width={400}
                    height={150}
                    className="img-fluid rounded mb-3"
                    alt={project_title || 'Project image'}
                  />
                ) : (
                  <img
                    src={`${process.env.NEXT_PUBLIC_CMS_URL}/assets/${project_image}`}
                    width={400}
                    height={150}
                    className="img-fluid rounded mb-3"
                    alt={project_title || 'Project image'}
                  />
                )}

                {project_description && project_description
                  .split(`\n\n`)
                  .map((paragraph, index) => (
                    <CardText key={index}>{paragraph}</CardText>
                  ))}

                {project_links && project_links.length > 0 && (
                  <CardText>
                    {project_links.map((link, index) => {
                      if (!link || Object.keys(link).length === 0) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          <p>
                            {link.name}:{" "}
                            <Link target="_blank" href={link.href}>
                              {link.href}
                            </Link>
                          </p>
                        </div>
                      );
                    })}
                  </CardText>
                )}

                <Link className="btn btn-dark " href="/projects">
                  ← Back to all projects
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectDetailPage;