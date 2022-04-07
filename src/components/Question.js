import React from "react";
import clipboard from "./imgs/Clipboard.png";
import { BsQuestionLg } from "react-icons/bs";

function Question() {
  return (
    <div
      className="row
    "
    >
      <div className="column">
        <BsQuestionLg className="questionMark"></BsQuestionLg>
        <h2>Have any Question?</h2>
        <p>
          Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus
          tempor dolor vel odio efficitur ac sollicitudin.
        </p>
        <h3 className="question">How can I install the App?</h3>
        <p>
          Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
          scelerisque nisi urna. Duis rutrum non risus in imperdiet.
        </p>
        <h3 className="question">What is the Main Features of this App?</h3>
        <h3 className="question">Is there any Video Sessions?</h3>
      </div>
      <img alt="clipboard" src={clipboard} className="image"></img>
    </div>
  );
}

export default Question;
