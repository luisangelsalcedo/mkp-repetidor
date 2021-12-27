import React, { Component, useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const typing = thisValue => {
    setText(thisValue);
  };
  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        type="text"
        onChange={e => typing(e.target.value)}
        placeholder="Empieza a escribir algo"
      />
      <p className="repeater">{text}</p>
    </div>
  );
};

export default App;
