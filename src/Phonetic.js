import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio}>Listen</a>
      <span> </span>
      {props.phonetic.text}
    </div>
  );
}
