import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.course}</h2>
      <h3>{props.c1}</h3>
      <h3>{props.c2}</h3>
      <h3>{props.c3}</h3>
      <h3>{props.c4}</h3>
      <h3>{props.c5}</h3>
      <h3>{props.c6}</h3>
    </div>
  );
}
export default Card;
