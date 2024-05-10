import React from "react";

import axios from "axios";

import { useEffect } from "react";

import Card from "./reusable-components/Card";
import SecHeader from "./reusable-components/SecHeader";

import gImg1 from "../assets/guide-1.jpg";
import gImg2 from "../assets/guide-2.jpg";
import gImg3 from "../assets/guide-3.jpg";

export default function Guide() {
  // useEffect(()=>{
  //   axios.get('https://api.escuelajs.co/api/v1/products')
  //   .then((res)=>{
  //     // Access the headers of the response
  //     const headers = res.headers;

  //     // Log the headers to the console
  //     console.log('Response Headers:', headers);

  //     // You can access specific headers using their names
  //     const contentTypeHeader = headers['content-type'];
  //     console.log('Content-Type Header:', contentTypeHeader);

  //     console.log(res)
  //     console.log(res.data)
  //     console.log(res.data[0])
  //     console.log(res.data[0].id) // 2
  //     console.log(res.data[0].title) // Classic Red Pullover Hoodie
  //     console.log(res.data[0].price) // 10
  //     console.log(res.data[0].description) // Elevate your casual wardrobe with our Classic Red Pullover Hoodie.
  //     console.log(res.data[0].rating)
  //     console.log(res.data[0].assets) // (3) ['https://i.imgur.com/1twoaDy.jpeg', 'https://i.imgur.com/FDwQgLy.jpeg', 'https://i.imgur.com/kg1ZhhH.jpeg']

  // })
  // .catch((error)=>{
  //   console.log(error)
  // })
  // })

  const GuideCard = ({ fig, Gname, job, p }) => {
    return (
      <>
        <Card secCardName={"guide-card"}>
          <div className="guide-img">
            <img src={fig} alt="" />

            <div className="guide-socials">
              <div>
                <span>
                  <a href="#">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <i className="ri-instagram-line"></i>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </span>
              </div>
              <button className="btn">Follow me</button>
            </div>
          </div>

          <div className="guide-content">
            <div className="guide__details">
              <h4>{Gname}</h4>
              <p>{job}</p>
            </div>
            <p>{p}</p>
          </div>
        </Card>
      </>
    );
  };
  return (
    <>
      <section className="guide" id="guide">
        <div className="container">
          <SecHeader secName={"Tour Guide"} />
          <div className="card-group">
            <GuideCard
              fig={gImg1}
              Gname={"Andrew Farley"}
              job={"Ocean Guide"}
              p={
                "With a deep passion for forests, our experts are committed to craft immersive experiences to connect with the wilderness."
              }
            />
            <GuideCard
              fig={gImg2}
              Gname={"Elias Hossain"}
              job={"Forest Guide"}
              p={
                "With a deep passion for forests, our experts are committed to craft immersive experiences to connect with the wilderness."
              }
            />
            <GuideCard
              fig={gImg3}
              Gname={"Jim Oste"}
              job={"City Guide"}
              p={
                "With a deep passion for forests, our experts are committed to craft immersive experiences to connect with the wilderness."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
