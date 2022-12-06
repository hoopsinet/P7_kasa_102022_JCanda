import React, { useState } from "react";
import arrowbot from "../../img/arrowbot.png";
import arrowtop from "../../img/arrowtop.png";
import "./Collaps.css";

export default function Collapsible({ content, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={title}>
      <button className="pushdown" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>
          {isOpen ? <img src={arrowtop} alt="" /> : <img src={arrowbot} alt="" />}
        </span>
      </button>
      {isOpen && <div className="content">{content}</div>}
    </div>
  );
}
