import React, { useEffect } from "react";

const Banner = ({ game }) => {
  useEffect(() => {
    // gameBanner();
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute bottom-0 p-2   bg-gradient-to-t from-slate-400 to-transparent w-full  
      "
      >
        <h2 className="text-[24px] text-slate-200 font-bold">{game.name}</h2>
        <button className="bg-blue-400 px-6 p-2 rounded-lg m-1 ">
          Get Now
        </button>
      </div>
      <img
        src={game.background_image}
        className="rounded-xl w-full  md:h-[500px] object-cover"
      />{" "}
    </div>
  );
};

export default Banner;
