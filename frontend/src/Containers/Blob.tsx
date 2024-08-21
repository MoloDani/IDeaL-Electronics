import React from "react";
import "./blob.css";

interface Props {
  leftOffset: number;
  topOffset: number;
}

function Blob({ topOffset, leftOffset }: Props) {
  return (
    <div id="blob" style={{ top: topOffset, left: leftOffset }}>
      <p></p>
    </div>
  );
}

export default Blob;
