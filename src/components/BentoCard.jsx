import React from "react";

const BentoCard = ({ src, title, disc,isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      ></video>

      <div className="relative z-10  size-full flex flex-col  p-5 text-blue-50   justify-between">
        <div>

        <h1 className="bunto-title special-font font-bold  uppercase">
          {title}
        </h1>
        {disc && <p className="mt-3 max-w-64 text-xs md:text-base opacity-50">{disc}</p>}
        </div>


       {isComingSoon&& <button className="text-gray-600 border-hsla bg-black rounded-full w-36 px-2 py-1  uppercase text-sm font-robert-medium">Comming Soon</button>}
      </div>
    </div>
  );
};

export default BentoCard;
