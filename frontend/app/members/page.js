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

import { MEMBERS } from "../_shared/MEMBERS";
import SecondaryHeader from "../_components/headers/SecondaryHeader";
import ProfileCard from "./components/ProfileCard";

function MemberPage() {
  return (
    <>
      <SecondaryHeader title="Members" subtitle="Our Member Roster" />
      <section>
        <Container className="py-5">
          {" "}
          <Row className="mb-4">
            <Col lg={12}></Col>
          </Row>
          <Row>
            {MEMBERS.map((member, index) => {
              return (
                <Col key={index} md={4} className="mb-4">
                  <ProfileCard member={member} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default MemberPage;
