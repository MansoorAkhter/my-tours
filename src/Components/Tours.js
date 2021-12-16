import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="toursComp">
        <h2>our tours</h2>
        <div className="underLine"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
