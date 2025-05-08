"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";
import Link from "next/link";
import SecondaryHeader from "../_components/headers/SecondaryHeader";
import ProjectCard from "../_components/cards/ProjectCard";
// import { PROJECTS } from "../_shared/PROJECTS";

function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [sortedProjects, setSortedProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/items/projects?fields=*,project_image.id,project_image.filename_disk`);

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
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (searchQuery === "") return true;
    const q = searchQuery.toLowerCase();
    return (
      project.projectTitle?.toLowerCase().includes(q) ||
      project.projectAuthor?.toLowerCase().includes(q) ||
      project.projectDescription?.toLowerCase().includes(q) ||
      project.projectDate?.toLowerCase().includes(q) ||
      project.tags?.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  // useEffect(() => {
  //   const newSortedProjects = PROJECTS.sort(
  //     (a, b) => new Date(b.projectDate) - new Date(a.projectDate)
  //   );
  //   setSortedProjects(newSortedProjects);
  // }, []);

  // const filteredProjects = sortedProjects.filter((project) => {
  //   if (searchQuery === "") return true;
  //   const lowercaseQuery = searchQuery.toLowerCase();
  //   return (
  //     project.projectTitle.toLowerCase().includes(lowercaseQuery) ||
  //     project.projectAuthor.toLowerCase().includes(lowercaseQuery) ||
  //     project.projectDescription.toLowerCase().includes(lowercaseQuery) ||
  //     project.projectDate.toLowerCase().includes(lowercaseQuery) ||
  //     project.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  //   );
  // });



  return (
    <>
      {/* Site Header */}
      <SecondaryHeader
        title="Projects"
        subtitle="A showcase of member projects"
        description="On this page you will find a library of previous and current
                    projects of all of our members. Check them out and see what
                    inspires you!"
      />

      {/* Projects Grid */}
      <section id="projects" className="py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h2>Current Projects</h2>
              <p>Please use the search bar to find projects</p>
            </Col>
          </Row>

          {/* Search bar for projects*/}
          <Row className="mb-4">
            <Col lg={8}>
              <InputGroup>
                <InputGroupText style={{ backgroundColor: "#621220" }}>
                  <i className="bi bi-search text-white" />
                </InputGroupText>
                <Input
                  placeholder="Search Projects..."
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            {filteredProjects.map((project) => (
              <Col
                key={project.id}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className="mb-4"
              >
                <Link
                  href={`/ projects / ${project.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ProjectCard project={project} />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProjectsPage;
