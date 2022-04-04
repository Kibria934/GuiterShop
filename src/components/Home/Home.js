import React, { useEffect, useState } from "react";
import useReview from "../../hooks/useReview";
import HomeReview from "../HomeReview/HomeReview";
import HomeRebiew from "../HomeReview/HomeReview";
import "./Home.css";
const Home = () => {
  //   const [review, setReview] = useReview();
  //   const [pic, setPic] = useState([]);
  //   // console.log(review);
  //   const photo = review.find((one) => one.pic);
  //   console.log(photo.pic);

  return (
    //   Main div
    <div>
      <div className="flex justify-between h-[85vh] mb-10 items-center">
        {/* left side div */}
        <div className="flex-1 text-left pl-10 mt-5">
          <div>
            {/* content div */}
            <div>
              <h1 className="text-7xl py-5 font-bold special-line ">
                Your special guitar is here
              </h1>
            </div>
            <div>
              <p className="text-left text-xl py-10 text-gray-700 font-mono ">
                A guitar that produces sound acoustically transmitting the
                vibration of the strings to the air. The sound waves from the
                strings of guitar resonate through the guitar's body, creating
                sound. This typically involves the use of a sound board and a
                sound box to strengthen the vibrations of the strings. Whole
                body of this guitar is made of wood.The acoustic guitar's
                soundboard, or top, also has a strong effect on the loudness of
                the guitar.
              </p>
              <span className="bg-green-100 rounded-3xl btn-style px-20 py-3 text-center text-lg font-bold text-red-900">
                SHOW DEMO
              </span>
            </div>
          </div>
        </div>
        {/* Right side div */}
        <div className="flex-1 text-center mt-5">
          <img
            src={
              "https://img.freepik.com/free-photo/old-wooden-guitar-isolated_144627-4374.jpg?t=st=1649043495~exp=1649044095~hmac=d1efefda78e65ec02df6a91af28b5735774ef1bee09c0a598f8c84291cf7debe&w=1380"
            }
            alt=""
          />
        </div>
      </div>
      {/* review section */}
      <div>
        <HomeReview></HomeReview>
      </div>
    </div>
  );
};

export default Home;
