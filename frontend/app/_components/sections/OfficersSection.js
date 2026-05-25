import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

function OfficersSection({ members }) {
  const officers = members.filter((member) => member.officer);

  return (
    <>
      <section id="officers" className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div>
                <h1>
                  <i
                    className="bi bi-person-circle"
                    style={{ color: "#a41e35" }}
                  ></i>
                </h1>
                <h2>Our Officers</h2>
                <br />
              </div>
            </Col>
          </Row>
          <Row>
            {officers.map((officer, index) => {
              let className = "text-center col-md-4 col-sm-6 col-xs-6";

              if (officers.length - 1 <= 1) {
                className =
                  "text-center col-md-offset-4 col-md-6 col-sm-6 col-xs-6";
              } else if (officers.length % 2 == 0) {
                className =
                  "text-center col-md-offset-4 col-md-3 col-sm-6 col-xs-6";
              }

              return (
                <div key={officer.id} className={className}>
                  <Link
                    href={officer.linkedIn}
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <Image
                      className="img-fluid rounded"
                      width={150}
                      height={150}
                      src={officer.photo}
                      alt="officer photo"
                    />
                    <h4 className="text-muted mt-3" style={{ fontWeight: 500 }}>
                      {officer.name}
                    </h4>
                    <p className="text-muted">{officer.position}</p>
                  </Link>
                </div>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OfficersSection;
