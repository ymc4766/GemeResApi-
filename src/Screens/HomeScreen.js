import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlopalApi from "../Services/GlopalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenres from "../components/GamesByGenres";

const HomeScreen = () => {
  // 4f16ca7b85a2462bad8aed6ea0e2cbda
  const [games, setGames] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);

  const getAllGame = () => {
    GlopalApi.getAllGames.then((res) => {
      setGames(res.data.results);
      // setGameListByGenres(res.data.results);
      // console.log("games", res.data.results);
    });
  };

  const getGameLsitByGenres = (id) => {
    GlopalApi.getGameListBgGenreId(id).then((res) => {
      console.log("game list by genre id", res.data.results);
      setGameListByGenres(res.data.results);
    });
  };

  useEffect(() => {
    getAllGame();
    getGameLsitByGenres(4);
  }, []);

  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block border-r-[2px] border-gray-400 m-3">
        <GenreList setGenresId={(genresId) => getGameLsitByGenres(genresId)} />
      </div>
      <div className="col-span-4 md:col-span-3">
        {games.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            {" "}
            <Banner game={games[0]} />
            <TrendingGames games={games} />
            <GamesByGenres gameList={gameListByGenres} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HomeScreen;
