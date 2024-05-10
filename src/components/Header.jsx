import React from "react";
import NavBar from "./NavBar";
// import Container from 'react-bootstrap/esm/Container'

// export header bg img as a variable
import headerBgImg from "../assets/header.jpg";

export default function Header() {
  const styling = {
    backgroundImage: `url(${headerBgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <header className="header" id="Home" style={styling}>
        <div className="container">
          {/* <Container> */}

          {/* Navbar */}
          <NavBar />

          <h1>Explore the beauty of nature Discover the new you</h1>
          {/* form */}
          <div className="form-overlay">
            <form action="/" method="">
              <div className="input-group">
                <label for="destination">Where do you want to go?</label>
                <input type="text" placeholder="Country, ZIP" />
              </div>
              <div className="input-group">
                <label for="checkIn">Check In</label>
                <input type="text" placeholder="Choose a date" />
              </div>
              <div className="input-group">
                <label for="CheckOut">Check Out</label>
                <input type="text" placeholder="Choose a date" />
              </div>
              <div className="input-group">
                <label for="guests">Guests</label>
                <input type="text" placeholder="Number of guests" />
              </div>

              <button className="btn">CHECK AVAILABILITY</button>
            </form>
          </div>
          {/* </Container> */}
        </div>
      </header>
    </>
  );
}
