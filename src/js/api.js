const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '82c211a0cb754dbef32a794b59444890';

const getTrendingMovies = async (page = 1) => {
  try {
    const resp = await fetch(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    if (!resp.ok) throw new Error(resp.status);

    return await resp.json();
  } catch (err) {
    console.error(err.stack);
  }
};

const getMoviesByQuery = async (query, page = 1) => {
  try {
    const resp = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
    );

    if (!resp.ok) throw new Error(resp.status);

    return await resp.json();
  } catch (err) {
    console.error(err.stack);
  }
};

const getMovieDetails = async id => {
  try {
    const resp = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    if (!resp.ok) throw new Error(resp.status);

    return await resp.json();
  } catch (err) {
    console.error(err.stack);
  }
};

const getMovieTrailer = async id => {
  try {
    const resp = await fetch(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );

    if (!resp.ok) throw new Error(resp.status);

    return await resp.json();
  } catch (err) {
    console.error(err.stack);
  }
};

const getMoviesById = async arr => {
  try {
    const arrOfMovies = arr.map(async id => {
      const resp = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
      );

      if (!resp.ok) throw new Error(resp.status);

      return await resp.json();
    });

    return await Promise.all(arrOfMovies);
  } catch (err) {
    console.error(err.stack);
  }
};

const Api = {
  getTrendingMovies,
  getMoviesByQuery,
  getMovieDetails,
  getMovieTrailer,
  getMoviesById,
};

export default Api;
