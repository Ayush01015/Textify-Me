import React from "react";
import {useState} from "react";
export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
        // console.log(e.target.value);
    }
    const [text , setText] = useState('Enter text here');
    // setText="ayush"; //wrong
    // setText("Ayush");

  return (
    <div>
      <h1>{props.heading}</h1>
      <textarea value={text} onChange={handleOnChange} className="form-control my-3" id="myBox" rows="8"></textarea>
      <button type="button"  onClick={handleUpClick} className="btn btn-primary" >Convert to UpperCase</button>
    </div>
  );
}
