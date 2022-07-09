// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import Comment from "./components/Comment.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/textForm.js";
// import About from "./components/About";
import Alert from "./components/Alert.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [blindMode, setBlindMode] = useState("blindOff");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };

  const toogleBlindMode = () => {
    if (blindMode === "blindOff") {
      setBlindMode("blindOn");
      document.body.style.backgroundColor = "#3330E4";
      showAlert("Blind Mode has been Enabled", "success");
      console.log("Blind Modeee on");
    } else if (blindMode === "blindOn") {
      setBlindMode("blindOff");
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Blind Mode Disabled", "danger");
      console.log("Blind Modeee off");
    }
  };

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Textify"
          aboutText="About"
          mode={mode}
          blindMode={blindMode}
          capitalize={capitalize}
          toogleMode={toogleMode}
          toogleBlindMode={toogleBlindMode}
        />
        <Alert alert={alert} capitalize={capitalize} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route
              exact
              path="/"
              element={
                <TextForm
                  text="here is your text"
                  heading="Enter the Text to analyse"
                  textSummary="Your Text Summary"
                  mode={mode}
                  blindMode={blindMode}
                  capitalize={capitalize}
                  alert={alert}
                  showAlert={showAlert}
                  toogleBlindMode={toogleBlindMode}
                />
              }
            />
          </Routes> */}
          <TextForm
                  text="here is your text"
                  heading="Enter the Text to analyse"
                  textSummary="Your Text Summary"
                  mode={mode}
                  blindMode={blindMode}
                  capitalize={capitalize}
                  alert={alert}
                  showAlert={showAlert}
                  toogleBlindMode={toogleBlindMode}
                />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
