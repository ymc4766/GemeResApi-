import React from "react";
import { BiSolidComment } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
const GamesByGenres = ({ gameList }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-2 mb-2">popular Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2">
        {gameList.map((item) => (
          <div className="bg-violet-400 p-3 rounded-xl ">
            <img
              src={item.background_image}
              alt={item.name}
              className="w-full object-cover"
            />
            <h3 className="text-lg font-bold">
              {item.name} <span>{item.metacritic}</span>
            </h3>

            <div className="flex items-center justify-between">
              <h3 className="flex items-center space-x-1">
                <AiTwotoneStar className="text-silver-900" />
                <span> {item.rating} </span>{" "}
              </h3>
              <p className="flex items-center space-x-1">
                <BiSolidComment /> <span> {item.reviews_count} </span>
              </p>
              <p>{item.suggestions_count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenres;
