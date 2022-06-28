import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
      <label for="myBox" className="form-label">{props.text}</label>
  <textarea className="form-control my-3" id="myBox" rows="8"></textarea>
    </div>
  );
}
