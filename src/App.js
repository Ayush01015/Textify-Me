// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import Comment from "./components/Comment.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/textForm.js";
// import About from "./components/About";
import Alert from "./components/Alert.js";

function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      <Navbar
        title="Textify"
        aboutText="About"
        mode={mode}
        capitalize={capitalize}
        toogleMode={toogleMode}
      />
      <Alert alert="This is alert message"/>
      <div className="container">
        <TextForm
          text="here is your text"
          heading="Enter the Text to analyse"
          textSummary="Your Text Summary"
          mode={mode}
          capitalize={capitalize}
        />
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
