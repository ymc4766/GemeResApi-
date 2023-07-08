import React, { useEffect, useState } from "react";
import GlopalApi from "../Services/GlopalApi";
// import { getGenrList } from "../services/GlopalApi";

const GenreList = ({ setGenresId }) => {
  const [genList, setGenList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const getGenreList = () => {
    GlopalApi.getGenresList.then((res) => {
      console.log(res.data.results);
      setGenList(res.data.results);
    });
  };

  useEffect(() => {
    getGenreList();
  });
  return (
    <div className="px-4">
      <h1 className="text-gray-800 dark:text-slate-100 text-3xl">Genres </h1>

      <div>
        {genList.map((item, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              setGenresId(item.id);
            }}
            className={`flex space-x-2 items-center mb-2 cursor-pointer hover:bg-gray-300
           dark:hover:bg-violet-400 py-3 p-2 group rounded-lg ${
             activeIndex == index ? "bg-gray-300 dark:bg-violet-400" : ""
           }`}
          >
            <img
              src={item.image_background}
              alt={item.name}
              className="w-[40px] h-[40px] object-cover rounded-lg 
              group-hover:scale-105 transition-all ease-in-out duration-300"
            />
            <h3
              className={`text-lg group-hover:font-bold ${
                activeIndex == index ? "text-bold text-gray-800" : ""
              }`}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
