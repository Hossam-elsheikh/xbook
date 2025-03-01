"use client";
import React, { useState } from "react";
// apply optimstic update here
const FollowButton = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      onClick={() => setClicked(!clicked)}
      className={`font-medium bg-main text-sm text-background px-6 py-2 rounded-full hover:opacity-80 transition-all duration-150 ${clicked && 'bg-gray-700'}`}
    >
      {clicked ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
