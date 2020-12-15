import React, { useState } from "react";
import "./styles.css";
import List from "./List";

function App() {
  const [data, setdata] = useState("");
  const [items, setitems] = useState([]);
  const Updatedata = (event) => {
    setdata(event.target.value);
  };

  const listOfItems = () => {
    setitems((prev) => {
      return [...prev, data];
    });
    setdata("");
  };
  const onDelete = (id) => {
    setitems((prev) => {
      return prev.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <div id="myDIV" className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input
          id="myInput"
          type="text"
          placeholder="Add Item"
          onChange={Updatedata}
          value={data}
          autoComplete="off"
        />
        <button className="addBtn" onClick={listOfItems}>
          Add
        </button>
      </div>
      {items.map((val, index) => {
        return <List key={index} id={index} text={val} delete={onDelete} />;
      })}
    </div>
  );
}
export default App;
