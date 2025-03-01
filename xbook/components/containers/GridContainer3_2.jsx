import React from "react";

const GridContainer3_2 = ({ children }) => {
  return (
    <div className={`grid grid-cols-5 w-full gap-4 xl:gap-10`}>
      <div className={`col-span-5 lg:col-span-3`}>{React.Children.toArray(children)[0]}</div>
      <div className={`col-span-2`}>{React.Children.toArray(children)[1]}</div>
    </div>
  );
};

export default GridContainer3_2;
