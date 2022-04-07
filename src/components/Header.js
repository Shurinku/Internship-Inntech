import React from "react";
import VR from "./imgs/VR.jpg";

function Header() {
  return (
    <div className="header row">
      <div className="main">
        <h1>Download Our app and enjoy!</h1>
        <p className="override">
          Contrary to popular belief, Lorem Ipsum is not simply randa text. has
          roots in a piece of classical Latin literature from BC, making it over
          2000 years old. Richard McClintock.
        </p>
        <button className="btn-select">Download App</button>
        <button>Watch Video</button>
      </div>
      <img src={VR} alt="VR" className="image"></img>
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Header;
