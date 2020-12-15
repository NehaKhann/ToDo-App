import React, { useState } from "react";
import "./styles.css";

function List(props) {
  let [cut, setcut] = useState(false);
  const Line = () => {
    setcut(true);
  };
  return (
    <div>
      <ul>
        <li style={{ textDecoration: cut ? "line-through" : "none" }}>
          {props.text}{" "}
          <button
            className="close"
            onClick={() => {
              props.delete(props.id);
            }}
          >
            Wanna Delete your item? Click this!
          </button>
          <button className="cut" onClick={Line}>
            Wanna Cut your item ? Click this!
          </button>
        </li>
      </ul>
    </div>
  );
}
export default List;
