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
        if (index <= 4) {
          return (
            <div key={index}>
              <p>
                <Definitions definitions={definition.definition} />
                <Examples examples={definition.example} />
                <Synonyms synonyms={definition.synonyms} />
              </p>
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
