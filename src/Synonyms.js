import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        <span>
          {props.synonyms.map(function (synonym, index) {
            return <div key={index}>{synonym}</div>;
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
