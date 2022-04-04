import React from "react";
import useCards from "../../hooks/useCards";
import Carts from "../Carts/Carts";
import "./Review.css";

const Review = () => {
  const [carts, setCarts] = useCards();
  // console.log(carts);
  return (
    <div className="container">
      <h1 className="text-center font-mono font-bold text-3xl m-5 text-red-900">
        CUSTOMAR'S REVIEWS
      </h1>
      <div className=" cart-container">
        {carts.map((cart) => (
          <Carts cart={cart} key={cart.id}></Carts>
        ))}
      </div>
    </div>
  );
};

export default Review;
