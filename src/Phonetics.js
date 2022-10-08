import React from "react";
import Phonetic from "./Phonetic.js";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        if (index === 1) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
