import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>Listen 👂🏼</h1>
          <hr />
          <h3>{props.results.word}</h3>
          <Phonetics phonetics={props.results.phonetics} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
