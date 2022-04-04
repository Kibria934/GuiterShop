import React from "react";
import useCards from "../../hooks/useCards";

const Review = () => {
  const [carts, setCarts] = useCards();
  console.log(carts);
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>cart:{carts.length}</p>
      </div>
    </div>
  );
};

export default Review;
