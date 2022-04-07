import React from "react";
import VR from "./imgs/VR.jpg";
import { BiEdit, BiShieldQuarter } from "react-icons/bi";
import { RiCompasses2Fill } from "react-icons/ri";

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <RiCompasses2Fill className="compass" />
        <h3>Awesome Design</h3>
        <p>
          Lorem Ipsum dolor sit amet into consectetur adipiscing elit, sed do
          elusmod tempor incid.
        </p>
      </div>
      <div className="card">
        <BiEdit className="edit" />
        <h3>Easy to Edit</h3>
        <p>
          Lorem Ipsum dolor sit amet into consectetur adipiscing elit, sed do
          elusmod tempor incid.
        </p>
      </div>
      <div className="card">
        <BiShieldQuarter className="shield" />
        <h3>Fully Secured</h3>
        <p>
          Lorem Ipsum dolor sit amet into consectetur adipiscing elit, sed do
          elusmod tempor incid.
        </p>
      </div>
    </div>
  );
}

export default Cards;
