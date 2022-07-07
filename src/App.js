// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import Comment from "./components/Comment.js";
import Navbar from "./components/Navbar.js" 
import TextForm from "./components/textForm.js";
// import About from "./components/About";
 

function App() {
  const [mode,setMode]=useState("light");

  const toogleMode=()=>{
    if(mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor="black";
    }else{
      setMode('light')  
      document.body.style.backgroundColor="white";
    }
  } 
  return (
    <>
    <Navbar title="Textify" aboutText="About" mode={mode} toogleMode={toogleMode} />
    <div className="container">
      <TextForm text="here is your text" heading="Enter the Text to analyse" textSummary="Your Text Summary"  mode={mode} />
      {/* <About /> */}
    </div>
    </>    
  );
}

export default App;

//example from docs
// const comment = {
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };


// function App() {
//   return (
//     <>
//     <Comment
//     text={comment.text}
//     author={comment.author} />
//     </>
    
//   );
// }

// export default App;
