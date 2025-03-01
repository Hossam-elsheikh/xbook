import Link from "next/link";
import React from "react";

const Button = ({ href, text,className }) => {
  return (
    <Link href={href}>
      <button className={`bg-main text-white px-4 py-2 w-fit rounded-full hover:bg-hover hover:scale-110 hover:text-white transition-all ${className}`}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
