import React from "react";
import Definitions from "./Definitions.js";
import Examples from "./Examples.js";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h1>Learn 📖</h1>
      <hr />
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index <= 6) {
          return (
            <div key={index}>
              <div>
                <Definitions definitions={definition.definition} />
                <br />
                <Examples examples={definition.example} />
                <Synonyms synonyms={definition.synonyms} />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
