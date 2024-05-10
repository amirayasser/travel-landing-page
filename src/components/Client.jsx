import React from "react";
import SecHeader from "./reusable-components/SecHeader";

import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";
import Card from "./reusable-components/Card";

export default function Client() {
  const clintsList = [
    {
      name: "Mike Henderson",
      job: "Business Manager &amp; CEO",
      photo: client1,
      icon1: <i className="fa-solid fa-star-half-stroke"></i>,
      icon2: <i className="fa-regular fa-star"></i>,
    },
    {
      name: "Paul Harrison",
      job: "Director",
      photo: client2,
      icon1: <i className="fa-solid fa-star"></i>,
      icon2: <i className="fa-solid fa-star"></i>,
    },
    {
      name: "John Williams",
      job: "Content Writer",
      photo: client3,
      icon1: <i className="fa-solid fa-star"></i>,
      icon2: <i className="fa-regular fa-star"></i>,
    },
  ];

  const ClientCard = ({
    Cname,
    Cjob,
    Cphoto,
    rateIcon1,
    rateIcon2,
    feedBack,
  }) => {
    return (
      <Card secCardName={"client-card"}>
        <header className="client-header">
          <span>
            <i className="fa-solid fa-quote-right"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            {rateIcon1}
            {rateIcon2}
          </span>
        </header>
        <p>{feedBack}</p>

        <footer className="client-footer">
          <img src={Cphoto} alt="" />
          <div>
            <h4>{Cname}</h4>
            <p>{Cjob}</p>
          </div>
        </footer>
      </Card>
    );
  };
  return (
    <section className="clients" id="client">
      <div className="container">
        <SecHeader secName={"Clients Feedback"} />
        <div className="card-group">
          <ClientCard
            Cname={clintsList[0].name}
            Cjob={clintsList[0].job}
            Cphoto={clintsList[0].photo}
            rateIcon1={clintsList[0].icon1}
            rateIcon2={clintsList[0].icon2}
            feedBack={
              "I had the most incredible experience using this tour and travel website. From booking my flights and accommodations to discovering unique local activities, everything was seamless and well-organized. It made my trip stress-free and unforgettable. I cant wait to plan my next adventure with them"
            }
          />

          <ClientCard
            Cname={clintsList[1].name}
            Cjob={clintsList[1].job}
            Cphoto={clintsList[1].photo}
            rateIcon1={clintsList[1].icon1}
            rateIcon2={clintsList[1].icon2}
            feedBack={
              "As a frequent traveler, I have used various tour and travel websites but this one stands out for its attention to detail and personalized recommendations. The itineraries they offer are thoughtfully curated, and the insider tips on their blog were a game-changer for my recent trip. Highly recommended Thanks to them."
            }
          />

          <ClientCard
            Cname={clintsList[2].name}
            Cjob={clintsList[2].job}
            Cphoto={clintsList[2].photo}
            rateIcon1={clintsList[2].icon1}
            rateIcon2={clintsList[2].icon2}
            feedBack={
              "I'm not an experienced traveler, but this website made me feel like a pro. The customer support team was incredibly helpful in guiding me through the planning process, and their city guides provided valuable insights. Thanks to them, I had a fantastic time exploring a new city with confidence. I can't thank them enough!"
            }
          />
        </div>
      </div>
    </section>
  );
}
