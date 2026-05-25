import React from "react";
import Link from "next/link";
import Image from "next/image";
import nextjsLogo from "@/public/images/nextjs.svg";
import { Container, Row, Col } from "reactstrap";
import { NAVLINKS, SOCIALINKS } from "@/app/_shared/LINKS";

function Footer() {
  return (
    <footer className="bg-light text-muted border-top">
      {/* Section: Social media */}
      <section className="border-bottom py-3">
        <Container className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between gap-2">
          <div className="d-none d-lg-block">
            <span className="fw-semibold">Connect with us</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            {SOCIALINKS.map((link) => (
              <a key={link.id} href={link.href} className="text-reset" aria-label={link.name}>
                <i className={link.className}></i>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Section: Links */}
      <section className="pt-4 pb-2">
        <Container className="text-center text-md-start">
          <Row className="mt-3">
            {/* Club Info */}
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-3">TUDev</h6>
              <p className="small">
                We are a student club established at Temple University. We are a
                focused community of designers, developers, hackers, and makers.
              </p>
            </Col>

            {/* Links */}
            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Links</h6>
              <ul className="list-unstyled small">
                {NAVLINKS.map((link) => (
                  <li key={link.id} className="mb-2">
                    <Link href={link.href} className="text-reset text-decoration-none">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Contact */}
            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
              <p className="small mb-2">
                <Link
                  href="https://www.google.com/maps/place/30+S+15th+St+Ste+1550+PMB+209446,+Philadelphia,+PA+19102,+USA"
                  className="text-reset text-decoration-none"
                >
                  <i className="bi bi-house-fill me-3" />
                  30 S 15th St Ste 1550 PMB 209446, Philadelphia, PA 19102-4806, USA
                </Link>
              </p>
              <p className="small mb-0">
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
      <div className="text-center py-3 border-top" style={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 small">
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <a href="/" className="text-reset fw-bold text-decoration-none">
              TUDev.org
            </a>
          </span>
          <span className="d-flex align-items-center gap-2">
            <span>Made with</span>
            <a
              href="https://nextjs.org"
              className="text-reset fw-bold text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={nextjsLogo} alt="Next.js Logo" width={72} height={28} />
            </a>
          </span>
          <a
            href="https://github.com/daveyloder/tudev-nextjs"
            className="text-reset fw-bold text-decoration-none"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
