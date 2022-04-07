import React from "react";
import Hand from "./imgs/Hand.png";
import { AiFillHeart, AiFillCamera, AiFillThunderbolt } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";

function Container() {
  return (
    <div className="row main">
      <img src={Hand} className="image" alt="hand"></img>
      <div>
        <div className="icons">
          <AiFillHeart></AiFillHeart>
          <FaMusic></FaMusic>
          <AiFillCamera></AiFillCamera>
          <AiFillThunderbolt></AiFillThunderbolt>
        </div>
        <div>
          <h2>We Designed Perfect App for You</h2>
          <p>
            In consequant, quam id sodales hendrerit, eros mi molestie leo an
            lacinia risus neque tritique augue. proin tempus urna vel congue
            elementum. Vestibulum euismod accumsan.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet into consectetur adipiscing elit.
            </li>
            <li>Lorem ipsum dolor sit amet into consectetur. </li>
            <li>Lorem ipsum dolor sit amet into consectetur adipiscing.</li>
          </ul>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Container;
