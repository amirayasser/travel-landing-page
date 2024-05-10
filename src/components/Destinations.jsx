import React from "react";
import SecHeader from "./reusable-components/SecHeader";
import Card from "./reusable-components/Card";
import Badge from "./reusable-components/Badge";

import destFig1 from "../assets/destination-1.jpg";
import destFig2 from "../assets/destination-2.jpg";
import destFig3 from "../assets/destination-3.jpg";
import destFig4 from "../assets/destination-4.jpg";
import destFig5 from "../assets/destination-5.jpg";
import destFig6 from "../assets/destination-6.jpg";

export default function Destinations() {
  const DestinationCard = ({ assetsrc, rating, title, category }) => {
    return (
      <Card secCardName={"destination-card"}>
        <img src={assetsrc} alt="" />
        {/* <div className="badge">{rating}</div> */}
        <Badge>BadgeValue = {rating}</Badge>
        <div className="description-details">
          <h4>{title}</h4>
          <p>{category}</p>
        </div>
      </Card>
    );
  };
  return (
    <>
      <section className="destination" id="destinations">
        <div className="container">
          <SecHeader secName={"Top Destinations"} />

          <div className="card-group">
            <DestinationCard
              assetsrc={destFig1}
              rating={"4.7"}
              title={"Himalayas"}
              category={"Mountains"}
            />
            <DestinationCard
              assetsrc={destFig2}
              rating={"4.5"}
              title={"London"}
              category={"Beauty"}
            />
            <DestinationCard
              assetsrc={destFig3}
              rating={"4.3"}
              title={"Tokyo"}
              category={"Tradition"}
            />
            <DestinationCard
              assetsrc={destFig6}
              rating={"4.8"}
              title={"Greece"}
              category={"White Dome"}
            />
            <DestinationCard
              assetsrc={destFig5}
              rating={"4.2"}
              title={"Sydney"}
              category={"Waterfall"}
            />
            <DestinationCard
              assetsrc={destFig4}
              rating={"4.1"}
              title={"Amsterdam"}
              category={"Peace"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
