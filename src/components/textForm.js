import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };
  const handleOnClear = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleOnCopy = (e) => {
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleOnExtraScapes=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    console.log(text);
  }
  const [text, setText] = useState("");
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
            className="form-control-2 my-3 text-con"
            id="myBox"
            rows="13"
          ></textarea>
          <div className="container-flex">
            <button
              type="button"
              onClick={handleUpClick}
              className="btn btn-primary my-2 my-btn"
            >
              Convert to UpperCase
            </button>
            <button
              type="button"
              onClick={handleLowClick}
              className="btn btn-primary my-2 my-btn"
            >
              Convert to LowerCase
            </button>
            <button
              type="button"
              onClick={handleOnClear}
              className="btn btn-primary my-2 my-btn"
            >
              Clear Text
            </button>
            <button
              type="button"
              onClick={handleOnCopy}
              className="btn btn-primary my-2 my-btn"
            >
              Copy Text
            </button>
            <button
              type="button"
              onClick={handleOnExtraScapes}
              className="btn btn-primary my-2 my-btn"
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>

        <div className="container">
          <h1 className="gradient-text">{props.textSummary}</h1>
          <p
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {text.split(" ").length} Words & {text.length} Characters
          </p>
          <p
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {0.008 * text.split(" ").length} Minutes Read
          </p>
          <h2 className="gradient-text">Preview</h2>
          <div className="container-2">
            <p
              style={{
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              {text}
            </p>
          </div>
        </div>
      </>
    </div>
  );
}

TextForm.defaultProps = {
  //deaultProps
  title: "put title",
  aboutText: "About",
  mode:"dark"
};