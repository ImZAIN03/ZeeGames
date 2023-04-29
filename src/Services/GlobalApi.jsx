import axios from "axios";

const key = "151b4de09da84ebc978a9ca355bcd0c9";
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGamesListByGenreId=(id)=>axiosCreate.get('/games?key'+key+'&genres='+id);
export default{
    getGenreList,
    getAllGames,
    getGamesListByGenreId
}