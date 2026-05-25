"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import Link from "next/link";
import { OWLCONNECT, NAVLINKS } from "@/app/_shared/LINKS";

function NavbarComponent() {
  const leftNavLinks = NAVLINKS;

  const rightNavLinks = [
    {
      id: 1,
      pageName: "Join Us",
      href: OWLCONNECT,
      style: {
        backgroundColor: `rgba(255,255,255,.2)`,
        paddingTop: `15px`,
        paddingBottom: `15px`,
      },
    },
  ];

  // Collapse state setters
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop >= 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(true);
  //     }
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Navbar
      className={isScrolled ? "navbar-default isTop" : "navbar-default"}
      fixed="top"
      expand="lg"
      light
    >
      <div className="navbar-header">
        <Link href="/" className="navbar-brand">
          <img
            src="/images/logo-red.png"
            alt="logo"
            className="img-fluid"
            style={{ width: 25 }}
          />{" "}
          TUDev
        </Link>{" "}
      </div>
      <NavbarToggler onClick={toggle} navbar />

      {/* Left side of nav */}
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto navbar-nav">
          {leftNavLinks.map((link) => {
            return (
              <NavItem key={link.id}>
                <Link className="nav-link" href={link.href}>
                  {link.name}
                </Link>
              </NavItem>
            );
          })}
        </Nav>
      </Collapse>

      {/* Right side of nav */}
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="ml-auto navbar-nav justify-content-end"
          style={{ width: "100%" }}
        >
          {rightNavLinks.map((links) => (
            <NavItem key={links.id}>
              <Link
                target="_blank"
                rel="norefferer"
                className="nav-link"
                href={links.href}
                style={links.style}
              >
                {links.pageName}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
