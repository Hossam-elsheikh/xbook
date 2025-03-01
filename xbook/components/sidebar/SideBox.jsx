import React from "react";

const SideBox = ({ children }) => {
  return (
    <div className="flex flex-col border w-full bg-white p-5 rounded-md gap-7">
      {children}
    </div>
  );
};

export default SideBox;
