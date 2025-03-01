import Image from "next/image";
import React from "react";
import AddBook from "@/public/books.png";
import Explore from "@/public/search.png";
import Swap from "@/public/swap.png";
const Block = ({ children }) => {
  return (
    <div className="bg-white min-w-72 text-center shadow-md text-main items-center justify-around flex flex-col h-96 rounded-3xl gap-3 p-5">
      {children}
    </div>
  );
};
const Process = () => {
  return (
    <div className="bg-main flex flex-col gap-10 items-center text-white p-5 md:py-16 w-full">
      <h1 className="text-3xl">Acheive your target with three simple steps</h1>
      <div className="flex justify-between gap-8 mx-auto w-full md:w-[70%]">
        <Block>
          <Image src={AddBook} width={180} />
          <div>
            <h2 className="text-3xl font-semibold">Add Books</h2>
            <p className="text-md font-normal text-sec">
              Register and start adding your books to your library.
            </p>
          </div>
        </Block>
        <Block>
          <Image src={Explore} width={180} />
          <div>
            <h2 className="text-3xl font-semibold">Add Books</h2>
            <p className="text-md font-normal text-sec">
              Register and start adding your books to your library.
            </p>
          </div>
        </Block>
        <Block>
          <Image src={AddBook} width={180} />
          <div>
            <h2 className="text-3xl font-semibold">Add Books</h2>
            <p className="text-md font-normal text-sec">
              Register and start adding your books to your library.
            </p>
          </div>
        </Block>
       
      </div>
    </div>
  );
};

export default Process;
