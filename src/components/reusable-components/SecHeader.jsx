import React from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function SecHeader({ secName }) {
  return (
    <>
      <div className="sec-header">
        <h2 className="sec-title">{secName}</h2>
        {
          (secName !== 'seller') ? (
            <div className="sec-nav">
              <IoIosArrowDropleftCircle style={{ fontSize: '3rem' }} />
              <IoIosArrowDroprightCircle style={{ fontSize: '3rem' }} />
            </div>
          ) : (
            <div className="sec-btn">
              <button className="btn">Check All</button>
            </div>
          )
        }
      </div>
    </>
  );
}
