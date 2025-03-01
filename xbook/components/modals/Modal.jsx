"use client";
import React, { useState } from "react";
import { CircleX } from 'lucide-react';

const Modal = ({ children, btnText, btnClasses, bodyClasses }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className={`${btnClasses} block md:hidden`}
      >
        {btnText}
      </button>
      {showModal && (
        <div onClick={()=>setShowModal(false)} className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-slate-800 bg-opacity-60 ">
          <div onClick={e => e.stopPropagation} className={`bg-white relative animate-slideIn ${bodyClasses}`}>
           <CircleX className="absolute top-3 right-6 text-main font-bold  "  onClick={()=> setShowModal(false)}/>
            {children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
