import React from "react";
// Nav bar components:
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function NavBar({ addstyle, brandColor }) {
  return (
    <div style={{ ...addstyle }}>
      <Navbar className="nav">
        <Navbar.Brand className={`nav__logo ${brandColor}`} to="#home">
          Wanderlust
        </Navbar.Brand>
        <Nav className="mr-auto  nav__links">
          <NavLink exact className="link" to="/travel-landing-page/">
            Home
          </NavLink>
          <Link
            className="link"
            to="trending"
            style={{
              paddingRight: "1rem",
              paddingLeft: "1rem",
              cursor: "pointer",
            }}
          >
            Trending
          </Link>
          <Link
            className="link"
            to="destinations"
            style={{ paddingRight: "1rem", cursor: "pointer" }}
          >
            Destinations
          </Link>
          <Link className="link" to="guide" style={{ cursor: "pointer" }}>
            Guide
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
