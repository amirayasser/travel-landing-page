import React from "react";
import SecHeader from "./reusable-components/SecHeader";
import Card from "./reusable-components/Card";

import figure1 from "../assets/trending-1.jpg";
import figure2 from "../assets/trending-2.jpg";
import figure3 from "../assets/trending-3.jpg";

import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineFreeCancellation } from "react-icons/md";

const TrendCard = ({
  cardFig,
  dolarPrice,
  rating,
  daysNum,
  title,
  description,
}) => {
  return (
    <Card secCardName="trending-card">
      <img src={cardFig} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="trending-details">
        <div className="price">
          <p>from</p>
          <h3>&#36;{dolarPrice}</h3>
          <p>*Price varies</p>
        </div>
        <div className="trending-ratings">
          <p>{rating}</p>
        </div>
      </div>
      <h5>
        <span>
          <IoTimeOutline
            style={{ color: "red", marginRight: "10px", fontSize: "1.3rem" }}
          />
        </span>
        {daysNum} days
      </h5>
      <p>
        <span>
          <MdOutlineFreeCancellation
            style={{ color: "red", marginRight: "10px" }}
          />
        </span>
        Free Cancellation
      </p>
    </Card>
  );
};

const Trending = () => {
 
  return (
 
      <section className="trending" id="trending">
        <div className="container">
          <SecHeader secName="Trending" />
          <div className="card-group">
            <TrendCard
              cardFig={figure1}
              dolarPrice="957.50"
              rating="4.8 (10)"
              daysNum="7"
              title="Mountain Hiking Tour"
              description="Hiking Our | Stoke On Trent"
            />
            <TrendCard
              cardFig={figure2}
              dolarPrice="500.50"
              rating="4.2 (25)"
              daysNum="3"
              title="Train Tour Skyline"
              description="Adventure Journey | Group Tour"
            />
            <TrendCard
              cardFig={figure3}
              dolarPrice="745.00"
              rating="4.5 (15)"
              daysNum="6"
              title="Wild Forest Life"
              description="Scenic Beauty | Adrenaline Rush"
            />
          </div>
        </div>
      </section>
  );
};

export default Trending;
