import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [arr, setMyArray] = useState([]);
  function handleText(event) {
    setText(event.target.value);
  }

  function handleClick() {
    setMyArray((prevItems) => {
      return [...prevItems, text];
    });
    setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleText} type="text" value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
