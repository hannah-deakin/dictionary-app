import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <h2 className="text">{props.phonetic.text}</h2>
    </div>
  );
}
