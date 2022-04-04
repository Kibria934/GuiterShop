import React from "react";
import "./HomeReview.css";

const HomeReview = () => {
  return (
    <div className="bg-red-100 h-[50vh]">
      <h3 className="review-tag">
        CUSTOMAR'S{" "}
        <span className="text-yellow-900">
          REV<strong>I</strong>EWS
        </span>
        (0)
      </h3>
      {/* customar reviews */}
      <div className="grid grid-cols-12 md:grid-cols-4">
        <div className="card">
          <h3>name:</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            commodi, tempore molestias voluptatem nesciunt dolore ipsum quas
            eligendi assumenda quam quod placeat libero quia! Maxime saepe quam
            minus fuga dolore.
          </p>
          <p>Rating:</p>
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
