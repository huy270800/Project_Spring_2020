import React from "react";

export default function ListElement(props) {
  return (
    <li style={{ display: "flex" }}>
      <div> {props.name}: </div> &nbsp;
      <div> €{props.price}  </div> &nbsp;
      <input
        type="checkbox"
        onChange={() => props.setDough(props.id)}
        checked={props.selected}
      />
    </li>
  );
}
