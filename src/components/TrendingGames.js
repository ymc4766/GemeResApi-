import React from "react";

const TrendingGames = ({ games }) => {
  return (
    <div>
      <h3 className="text-6xl mt-2  font-bold">Trending Games</h3>
      <div className="grid md:grid-cols-4 gap-1 px-4 py-2 mt-2">
        {games.map(
          (item, i) =>
            i <= 6 && (
              <div
                className="p-2 bg-[#525a52] rounded-lg  hover:scale-90
               transition-all duration-300 ease-in-out cursor-pointer "
              >
                <img
                  src={item.background_image}
                  className="rounded-lg object-cover"
                />
                <h2 className="text-2xl font-extrabold"> {item.name}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
