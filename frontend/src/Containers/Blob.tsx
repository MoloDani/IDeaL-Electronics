import React from "react";
import "./blob.css";

interface Props {
  leftOffset: number;
  topOffset: number;
  rightOffset: number;
}

function Blob({ topOffset, leftOffset, rightOffset }: Props) {
  if (leftOffset === -1) {
    return (
      <div id="blob" style={{ top: topOffset, right: rightOffset }}>
        <p></p>
      </div>
    );
  }
  return (
    <div id="blob" style={{ top: topOffset, left: leftOffset }}>
      <p></p>
    </div>
  );
}

export default Blob;
