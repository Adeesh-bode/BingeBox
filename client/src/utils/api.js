import axios from "axios";

const params = {
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_TOKEN,
    Accept: "application/json",
  },
};

const fetchDataFromUrl = async (url) => {
  try {
    // const response = await axios.get(process.env.REACT_APP_TOKEN_URL +  url + "?api_key="+ process.env.REACT_APP_KEY );
    // const response = await axios.get("https://api.themoviedb.org/3/account/20931335/rated/movies?api_key=bc05f5144c757767c8037ac8a3309b4e");

//     const response = await axios.get("https://api.themoviedb.org/3/account/20931335/rated/movies", {
//   headers: {
//     Accept: 'application/json',
//   },
//   params: {
//     api_key: 'bc05f5144c757767c8037ac8a3309b4e',
//   },
// });


    // const response = await axios.get(`${process.env.REACT_APP_TMDB_URL}${url}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
    // console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default fetchDataFromUrl;
