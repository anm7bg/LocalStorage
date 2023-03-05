import "./App.css";
import { useState } from "react";

function App() {

const [text, setText] =  useState(localStorage.getItem("text") || "");

console.log(text);

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea 
              className="textarea is-large" 
              placeholder="Notes..." 
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <button 
          className="button is-large is-primary is-active"
          onClick={() => localStorage.setItem("text", text)}
        >
            Save
          </button>
        <button 
          className="button is-large"
          onClick={() => setText("")}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
