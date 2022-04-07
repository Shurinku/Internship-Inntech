import React from "react";
import Profile from "./imgs/profile.png";
import {
  AiFillHeart,
  AiFillCamera,
  AiFillThunderbolt,
  AiFillLike,
} from "react-icons/ai";
import { FaMusic, FaUserAlt } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";

function Features() {
  return (
    <div className="row">
      <div>
        <div className="icons">
          <AiFillHeart></AiFillHeart>
          <FaMusic></FaMusic>
          <AiFillCamera></AiFillCamera>
          <AiFillThunderbolt></AiFillThunderbolt>
        </div>
        <h2>Our App Features</h2>
        <p>
          Cras accumsan pretium dignissim. Curabitur a orci lorem.Phasellus
          tempor dolor vel odio efficitur ac sollicitudin
        </p>
        <div>
          <div className="line">
            <BsFillBellFill className="compass"></BsFillBellFill>
            <h3>Instant Notifications</h3>
          </div>

          <p>
            Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
            scelerisque nisi urna.Duis rutrum non risus in imperdient.
          </p>
        </div>
        <div>
          <div className="line">
            <FaUserAlt className="edit"></FaUserAlt>
            <h3>User Friendly</h3>
          </div>

          <p>
            Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
            scelerisque nisi urna.Duis rutrum non risus in imperdient.
          </p>
        </div>
        <div>
          <div className="line">
            <AiFillLike className="shield"></AiFillLike>
            <h3>Secure Reliable</h3>
          </div>

          <p>
            Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
            scelerisque nisi urna.Duis rutrum non risus in imperdient.
          </p>
        </div>
      </div>
      <img src={Profile} className="image" alt="profile"></img>
    </div>
  );
}

export default Features;
