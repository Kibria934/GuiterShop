import React, { useEffect, useState } from "react";

const useCards = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return [cart, setCart];
};

export default useCards;
