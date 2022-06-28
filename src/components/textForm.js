import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <textarea className="form-control my-3" id="myBox" rows="8"></textarea>
      <button type="button" class="btn btn-primary">Convert to UPPERCASE</button>
    </div>
  );
}
