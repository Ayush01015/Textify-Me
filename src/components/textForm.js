import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };
  const [text, setText] = useState("Enter text here");
  // setText="ayush"; //wrong
  // setText("Ayush");

  return (
    <div>
      <>
        <div className="container">
          <h1 className="gradient-text">{props.heading}</h1>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control my-3 "
            id="myBox"
            rows="8"
          ></textarea>
          <button
            type="button"
            onClick={handleUpClick}
            className="btn btn-primary mx-2"
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            onClick={handleLoClick}
            className="btn btn-primary"
          >
            Convert to LowerCase
          </button>
        </div>
        <div className="container">
          <h1 className="gradient-text">{props.textSummary}</h1>
          <p>
            {text.split(" ").length-1} Words & {text.length} Characters
          </p>
          <p>
            {0.008*text.split(" ").length-1} Minutes Read
          </p>
          <h2 className="gradient-text">Preview</h2>
          <div className="conteiner-2">
          <p>{text}</p>
          </div>
        </div>
      </>
    </div>
  );
}
