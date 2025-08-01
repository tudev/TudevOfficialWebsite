import React from "react";
import Link from "next/link";
import Image from "next/image";
import nextjsLogo from "@/public/images/nextjs.svg";
import { Container, Row, Col } from "reactstrap";
import { NAVLINKS, SOCIALINKS } from "@/app/_shared/LINKS";

function Footer() {
  return (
    <footer className="bg-light text-muted">
      {/* Section: Social media */}
      <section className="border-bottom py-4">
        <Container className="d-flex justify-content-center justify-content-lg-between">
          <div className="me-5 d-none d-lg-block">
            <span>Connect with us on social media</span>
          </div>
          <div>
            {SOCIALINKS.map((link) => (
              <a key={link.id} href={link.href} className="me-4 text-reset">
                <i className={link.className}></i>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Section: Links */}
      <section className="mt-5">
        <Container className="text-center text-md-start">
          <Row className="mt-3">
            {/* Club Info */}
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">TUDev</h6>
              <p>
                We are a student club established at Temple University. We are a
                focused community of designers, developers, hackers, and makers.
              </p>
            </Col>

            {/* Links */}
            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              {NAVLINKS.map((link) => (
                <p key={link.id}>
                  <Link href={link.href} className="text-reset text-decoration-none">
                    {link.name}
                  </Link>
                </p>
              ))}
            </Col>

            {/* Contact */}
            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <Link
                  href="https://maps.google.com/?q=1925 N 12th St, Philadelphia, PA 19122, USA"
                  className="text-reset text-decoration-none"
                >
                  <i className="bi bi-house-fill me-3" />
                  1925 N 12th St, Philadelphia, PA 19122, USA
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:tudev.temple@gmail.com"
                  className="text-reset text-decoration-none"
                >
                  <i className="bi bi-envelope-fill me-3" />
                  tudev.temple@gmail.com
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/" className="text-reset fw-bold text-decoration-none">
            TUDev.org
          </a>
          {"  ||  "}Made with{" "}
          <a
            href="https://nextjs.org"
            className="text-reset fw-bold text-decoration-none"
            target="_blank"
          >
            <Image
              src={nextjsLogo}
              alt="Next.js Logo"
              className="img-fluid"
              style={{ width: "5em" }}
            />
          </a>
          {"  ||  "}
          See the GitHub for this site{" "}
          <a
            href="https://github.com/daveyloder/tudev-nextjs"
            className="text-reset fw-bold text-decoration-none"
          >
            here
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
