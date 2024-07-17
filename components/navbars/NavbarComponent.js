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

function NavbarComponent() {
  const leftNavLinks = [
    {
      id: 1,
      pageName: "About",
      href: "#about",
      style: { paddingTop: `15px`, paddingBottom: `15px` },
    },
    {
      id: 2,
      pageName: "Projects",
      href: "#projects",
      style: { paddingTop: `15px`, paddingBottom: `15px` },
    },
  ];

  const rightNavLinks = [
    {
      id: 1,
      pageName: "Join Us",
      href: "https://temple.campuslabs.com/engage/organization/tudev",
      style: {
        backgroundColor: `rgba(255,255,255,.2)`,
        paddingTop: `15px`,
        paddingBottom: `15px`,
      },
    },
  ];

  // Collapse state setters
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={isScrolled ? "navbar-default isTop" : "navbar-default"}
      fixed="top"
      expand="lg"
      // style={{ padding: 0 }}
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
          {leftNavLinks.map((links) => (
            <NavItem key={links.id}>
              <Link className="nav-link" href={links.href}>
                {links.pageName}
              </Link>
            </NavItem>
          ))}
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
