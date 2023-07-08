import axios from "axios";
const key = "4f16ca7b85a2462bad8aed6ea0e2cbda";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenresList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListBgGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);

export default { getGenresList, getAllGames, getGameListBgGenreId };

// export default GlopalAp
