import React from "react";
import "./HomeReview.css";

const HomeReview = ({ cart }) => {
  const { name, id, index, gender, img, rating, review } = cart;
  const reviews = [...review];
  return (
    <div className="">
      {/* customar reviews */}
      <div>
        <div className="card bg-red-300 shadow-xl ">
          <div className="flex justify-left h-full">
            <img
              className="text-center rounded-full w-[70px]"
              src={
                gender === "male"
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKLHUs90Ou-RNasqnNk_9ZIbpe25_CnluV88ifGUqK3BoMUpjYzLWCNaTzHZXxx9faMM&usqp=CAU"
                  : "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-woman-costume-background-136596360.jpg"
              }
              alt=""
            />
            <div className="ml-4 ">
              <h3 className="text-2xl">{name}</h3>
              <p>Rating:{rating}</p>
            </div>
          </div>
          <p>{reviews.length > 200 ? reviews.slice(0, 199) : reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
