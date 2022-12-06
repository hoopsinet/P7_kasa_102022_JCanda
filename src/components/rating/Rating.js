import React from "react"
import starFull from "../../img/starFull.png"
import star from "../../img/star.png"
import './Rating.css';

export default function Rating(rate) {
const range = [1, 2, 3, 4, 5];

return range.map((rangeElem, key) =>
   rangeElem <= rate.rate ? (
      <img className="star"src={starFull}  key={key} alt=""/>
   ) : (
      <img
         src={star}
         key={key}
         className="empty__star star" alt=""
      />
   )
);

   }