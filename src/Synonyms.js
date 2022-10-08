import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
