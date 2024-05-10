import React, { useEffect, useState } from "react";
import Header from "./Header";
import Trending from "./Trending";
import Destinations from "./Destinations";

// import figures
import video from "../assets/video.mp4";
import videoBgImg from "../assets/tour.jpg";
import Seller from "./Seller";
import Guide from "./Guide";
import Client from "./Client";
import subscribeBg from "../assets/subscribe.jpg";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar
        brandColor={scrollPosition >= 676 ? "text-danger" : " "}
        addstyle={{
          position: "sticky",
          left: "0",
          top: "0",
          background: "#fff",
          zIndex: 9,
          display: scrollPosition <= 676 ? "none" : "block",
          boxShadow: scrollPosition <= 676 ? "none" : " 0 0 5px 0px #f00",
        }}
      />
      <Header />

      <Trending id={"trending"} />
      <Destinations />
      <Seller />

      {/* video section */}
      <section
        className="tour"
        id="tour"
        style={{ backgroundImage: ` url(${videoBgImg})` }}
      >
        <div className="container">
          <h4>Watch Our Video Tour</h4>
          <div className="video-container">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
      </section>

      <Guide />
      <Client />

      <section
        className="subscribe"
        style={{ backgroundImage: `url(${subscribeBg})` }}
      >
        <div className="container">
          <h1>Subscribe and be Updated</h1>
          <form action="">
            <input type="text" placeholder="Please enter your email address" />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
