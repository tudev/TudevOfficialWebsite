import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

import ProjectCard from "../cards/ProjectCard";
function ProjectsSection() {
  // const [sortedProjects, setSortedProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/items/projects?fields=*,project_image.id,project_image.filename_disk`)

        if (!res.ok) {
          throw new Error(`Http error! status: ${res.status}`);
        }
        const data = await res.json();
        const sorted = data.data.sort((a, b) => new Date(b.projectDate) - new Date(a.projectDate));
        setProjects(sorted)
      } catch (err) {
        console.error("Failed to fetch projects:", err)
        setError("Unable to load projects. Please try again later")
      }

    }
    fetchProjects()
  }, [])

  // useEffect(() => {
  //   const newSortedProjects = projects.sort(
  //     (a, b) => new Date(b.projectDate) - new Date(a.projectDate)
  //   );

  //   setSortedProjects(newSortedProjects);
  // }, []);
  return (
    <>
      <section
        id="projects"
        className="py-5"
        style={{ backgroundColor: "#621220" }}
      >
        <Container>
          <Row>
            <Col lg={12}>
              <h2 style={{ color: "white" }}>Featured Projects</h2>
            </Col>
          </Row>
          <Row>
            {projects.length == 0 || projects == null ? (
              <Col className="text-center text-white mb-4">
                <h4>Currently No Featured Projects</h4>
                <p>Please check back later!</p>
                {/* <LoadingSpinner /> */}
              </Col>
            ) : (
              projects.map((project) => {
                if (project.featured_project) {
                  return (
                    <Col
                      key={project.id}
                      lg={4}
                      md={6}
                      sm={12}
                      xs={12}
                      className="mb-4"
                    >
                      <ProjectCard project={project} />;
                    </Col>
                  );
                }
              })
            )}
          </Row>
          <Row className="text-center">
            <Col md={12}>
              <Link
                className="btn btn-xl"
                style={{
                  color: "white",
                  backgroundColor: "#a41e35",
                  outlineColor: "#a41e35",
                }}
                href="projects"
              >
                {" "}
                Check Out More
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProjectsSection;
