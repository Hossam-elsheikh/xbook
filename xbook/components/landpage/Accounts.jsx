import Image from "next/image";
import React from "react";
import Reader from "@/public/reader.png";
import Writer from "@/public/writer.png";
import Shop from "@/public/shop.png";
import scratch from "@/public/extension.png";
import Button from "../objects/Button";

const Block = ({ children,ScratchPosition }) => {
  return (
    <div className="bg-white w-full lg:w-80 border text-center shadow-md relative text-main items-center justify-between flex flex-col  rounded-3xl gap-3 p-5">
      <Image alt="puuple" src={scratch} width={150} className={`absolute opacity-20 top-0 right-0 ${ScratchPosition}`} />
      {children}
    </div>
  );
};
const Accounts = () => {
  return (
    <div id="accounts" className="bg-white scroll-smooth flex flex-col gap-10 items-center text-main p-5 md:py-16 w-full">
      <h1 className="text-3xl font-semibold text-center">
        Different Accounts, Different Purposes
      </h1>
      <div className="flex justify-between flex-col lg:flex-row gap-8 w-full md:w-[90%] mx-auto ">
        <Block ScratchPosition='top-20 left-16'>
          <Image src={Reader} width={220} alt='img'/>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">A Reader</h2>
            <p className="text-sm font-normal text-sec">
              Search for books and swap or buy them from their owners or from
              book stores.
            </p>
            <Button href="/register" text="Register as a reader" />
          </div>
        </Block>
        <Block ScratchPosition='top-20 left-16'>
          <Image src={Writer} width={220} alt='img'/>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">A Writer</h2>
            <p className="text-sm font-normal text-sec">
              Communicate with your audience and share your thoughts about your books!
            </p>
            <Button href="/register" text="Register as a writer" />
          </div>
        </Block>
        <Block ScratchPosition='bottom-0 left-16'>
          <Image src={Shop} width={220} alt='img'/>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">A Store</h2>
            <p className="text-sm font-normal text-sec">
            Add your puplished books to your library and start marketing for them

            </p>
            <Button href="/register" text="Register as a store" />
          </div>
        </Block>
      </div>
    </div>
  );
};

export default Accounts;
