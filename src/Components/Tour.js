import React, { useState } from "react";

const Tour = ({id, image, info, price, name}) => {
  return (
    <article className="singleTourComp">
      <img src="{image}" alt="{name}" />
      <footer>
        <div className="tourInfo">
          <h4>{name}</h4>
          <h4 className="tourPrice">${price}</h4>
        </div>
        <p>{info}</p>
        <button className="deleteBtn">Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
