import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);

  };
  const handleOnClear = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared", "success");
  };
  const handleOnCopy = (e) => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };
  const handleOnExtraScapes = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    console.log(text);
    props.showAlert("Extra Spaces Removed", "success");
  };
  const [text, setText] = useState("");

  return (
    <div>
      <>
        <div className="container">
          <h1
            className={`gradient-${
              props.blindMode === "blindOn" ? "blind" : "text"
            }`}
          >
            {props.heading}
          </h1>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control-2 my-3 text-con"
            id="myBox"
            rows="13"
            placeholder="Enter Your Text"
            style={{
              backgroundColor:
                props.blindMode === "blindOn"
                  ? "#FF1700"
                  : props.mode === "light"
                  ? "#F5EDDC"
                  : props.mode === "dark"
                  ? "#1B2430"
                  : "white",
              color:
                props.blindMode === "blindOn"
                  ? "#FBFF00"
                  : props.mode === "light"
                  ? "black"
                  : props.mode === "dark"
                  ? "white"
                  : "black",
            }}
          ></textarea>
          <div className="container-flex">
            <button
              disabled={text.length === 0}
              type="button"
              onClick={handleUpClick}
              className={`btn btn-${
                props.blindMode === "blindOn" ? "warning" : "primary"
              } my-2 my-1 my-btn`}
            >
              Convert to UpperCase
            </button>
            <button
              disabled={text.length === 0}
              type="button"
              onClick={handleLowClick}
              className={`btn btn-${
                props.blindMode === "blindOn" ? "warning" : "primary"
              } my-2 my-1 my-btn`}
            >
              Convert to LowerCase
            </button>
            <button
              disabled={text.length === 0}
              type="button"
              onClick={handleOnClear}
              className={`btn btn-${
                props.blindMode === "blindOn" ? "warning" : "primary"
              } my-2 my-1 my-btn`}
            >
              Clear Text
            </button>
            <button
              disabled={text.length === 0}
              type="button"
              onClick={handleOnCopy}
              className={`btn btn-${
                props.blindMode === "blindOn" ? "warning" : "primary"
              } my-2 my-1 my-btn`}
            >
              Copy Text
            </button>
            <button
              disabled={text.length === 0}
              type="button"
              onClick={handleOnExtraScapes}
              className={`btn btn-${
                props.blindMode === "blindOn" ? "warning" : "primary"
              } my-2 my-1 my-btn`}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>

        <div className="container">
          <h1
            className={`gradient-${
              props.blindMode === "blindOn" ? "blind" : "text"
            }`}
          >
            {props.textSummary}
          </h1>
          <p
            style={{
              color:
                props.blindMode === "blindOn"
                  ? "#FBFF00"
                  : props.mode === "light"
                  ? "black"
                  : props.mode === "dark"
                  ? "white"
                  : "black",
            }}
          >
            {`${
              text.split(/\s+/).filter((ele) => {
                return ele.length !== 0;
              }).length
            } Words & ${text.length} Characters`}
          </p>
          <p
            style={{
              color:
                props.blindMode === "blindOn"
                  ? "#FBFF00"
                  : props.mode === "light"
                  ? "black"
                  : props.mode === "dark"
                  ? "white"
                  : "black",
            }}
          >
            {0.008 *
              text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length}{" "}
            Minutes Read
          </p>
          <h2 className="gradient-text">Preview</h2>
          <div
            className="container-2"
            style={{
              backgroundColor:
                props.blindMode === "blindOn"
                  ? "#FF1700"
                  : props.mode === "light"
                  ? "#F5EDDC"
                  : props.mode === "dark"
                  ? "#1B2430"
                  : "white",
              color:
                props.blindMode === "blindOn"
                  ? "#FBFF00"
                  : props.mode === "light"
                  ? "black"
                  : props.mode === "dark"
                  ? "white"
                  : "black",
            }}
          >
            <p>{text.length>0?text:"Nothing to Preview"}</p>
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
  mode: "dark",
};
