import React from "react";
import "./styles.css";

function List(props) {
  return (
    <div>
      <ul>
        <li>
          {props.text}{" "}
          <button
            className="close"
            onClick={() => {
              props.delete(props.id);
            }}
          >
            x
          </button>
        </li>
      </ul>
    </div>
  );
}
export default List;
