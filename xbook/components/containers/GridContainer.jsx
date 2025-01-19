import React from "react";

const GridContainer = ({ children,cols, firstPerc,seconedPerc }) => {
  return (
    <div className={`grid grid-cols-5 w-full gap-10`}>
      <div className={`col-span-${firstPerc}`}>{React.Children.toArray(children)[0]}</div>
      <div className={`col-span-${seconedPerc}`}>{React.Children.toArray(children)[1]}</div>
    </div>
  );
};

export default GridContainer;
