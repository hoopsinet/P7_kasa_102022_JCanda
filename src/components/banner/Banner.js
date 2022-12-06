import React from "react";
import "./Banner.css";

export default function Banniere({picture, text}) {
  return (
    <div className="banniere">
      <img src={picture} alt="banniere" className="banniere_img" />
      {text}
    </div>
  );
}