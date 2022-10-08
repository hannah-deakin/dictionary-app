import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <ReactAudioPlayer
        src={props.phonetic.audio}
        onPlay={true}
        controls={true}
      />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
