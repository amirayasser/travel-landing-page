import React from "react";
import SecHeader from "./reusable-components/SecHeader";
import Card from "./reusable-components/Card";

// import seller assets
import img1 from "../assets/seller-1.jpg";
import img2 from "../assets/seller-2.jpg";
import img3 from "../assets/seller-3.jpg";

export default function Seller() {
  const SellerCard = ({ img, dolarPrice, percent, d, n, title, details }) => {
    return (
      <>
        <Card secCardName={"seller-card"}>
          <div className="seller-img">
            <img src={img} alt="" />
            <div className="seller-img-content">
              <div className="badge">{percent}%</div>
              <div className="seller-img-footer">
                <div className="seller-price">
                  <p>
                    {d} Days | {n} Nights
                  </p>
                  <h4>&#36;{dolarPrice}</h4>
                </div>
                <button className="btn">Explore</button>
              </div>
            </div>
          </div>

          <div className="seller-details">
            <h4>{title}</h4>
            <p>{details}</p>
          </div>
        </Card>
      </>
    );
  };

  return (
    <>
      <section className="seller">
        <div className="container">
          <SecHeader secName={"Best Seller"} />
          <div className="card-group">
            <SellerCard
              img={img1}
              dolarPrice={955.5}
              percent={30}
              d={"10"}
              n={"09"}
              title={"Trains Tour Skyline"}
              details={
                "Embark on a scenic railway adventure with Trains Tour Skyline"
              }
            />
            <SellerCard
              img={img2}
              dolarPrice={785.5}
              percent={20}
              d={"05"}
              n={"06"}
              title={"Sea Nature View"}
              details={"Where the oceans beauty meets your souls serenity"}
            />
            <SellerCard
              img={img3}
              dolarPrice={955.5}
              percent={25}
              d={"07"}
              n={"04"}
              title={"Tokyo Market Ptr"}
              details={"Where Tradition Meets Modern Marvels in Every Aisle"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
