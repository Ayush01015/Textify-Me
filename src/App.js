// import logo from "./logo.svg";
import "./App.css";
// import Comment from "./components/Comment.js";
import Navbar from "./components/Navbar.js"
import TextForm from "./components/textForm.js";



function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" />
    <div className="container">
      <TextForm text="here is your text" heading="Enter the Text to analyse"/>
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