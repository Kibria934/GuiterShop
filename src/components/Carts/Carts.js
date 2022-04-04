import React from "react";
import "./Carts.css";

const Carts = ({ cart }) => {
  // console.log(cart);
  const { name, id, rating, gender, review } = cart;
  console.log(cart);
  return (
    <div>
      <div className="flex justify-center review-cart shadow-xl">
        <div className="flex h-full items-center ">
          <img
            className="w-10 rounded-full"
            src={
              gender === "male"
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKLHUs90Ou-RNasqnNk_9ZIbpe25_CnluV88ifGUqK3BoMUpjYzLWCNaTzHZXxx9faMM&usqp=CAU"
                : "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-woman-costume-background-136596360.jpg"
            }
            alt=""
          />
          <div className="flex flex-col ml-2 mb-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p>
              Rating:
              <span className="text-yellow-700 text-lg font-bold">
                {" "}
                {rating}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default Carts;
