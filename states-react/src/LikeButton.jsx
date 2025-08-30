import React from "react";
import {useState} from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  // let clicked = () => {
  //   console.log("clicked");
  // };
  let toggleLike = () => {
    // let newVal = !isLiked;
    setIsLiked(!isLiked);
  }

  let likeStyle = {color: "red"};
  
  return (
    <div>
      <h2 onClick={toggleLike}>
         {/* {isLiked.toString()} */}
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </h2>
    </div>
  );
}
