import Api from './api.js';
import { movieGenres } from './genres.js';
import refs from './refs.js';
import noImg from '../images/movies-gallery/noimg.jpg';
import Loader from './loader.js';

(async () => {
  try {
    Loader.show(refs.loader);
    const data = await Api.getTrendingMovies();

    Loader.hide(refs.loader);
    renderMovieCard(data.results);
  } catch (err) {
    console.error(err);
  }
})();

export function renderMovieCard(movies) {
  const markup = movies
    .map(
      ({
        id,
        title,
        name,
        release_date,
        first_air_date,
        poster_path,
        genre_ids,
      }) => {
        const posterSize = window.devicePixelRatio > 1 ? 'original' : 'w500';
        const moviePoster = poster_path
          ? `https://image.tmdb.org/t/p/${posterSize}/${poster_path}`
          : noImg;

        const movieDate = release_date
          ? release_date.slice(0, 4)
          : first_air_date
          ? first_air_date.slice(0, 4)
          : 'Unknown year';
        const movieName = title ? title : name;

        let matchedGenres = genre_ids
          .map(id => {
            const genre = movieGenres.find(g => g.id === id);
            return genre ? [`${genre.name}`] : '';
          })
          .filter(Boolean);

        matchedGenres =
          matchedGenres.length > 0
            ? matchedGenres.length > 2
              ? matchedGenres.slice(0, 2).join(', ') + ' (...)'
              : matchedGenres.join(', ')
            : 'Unknown genre';

        return `<li class="movie-container__card" data-id="${id}">
            <div class="poster"><img class="poster__img" src="${moviePoster}" alt="${title} poster" loading="lazy" /></div>
            <div class="movieInfo">
               <p class="movieInfo__item movieInfo--title">${movieName}</p>
               <p class="movieInfo__item">
                     ${matchedGenres} | ${movieDate}
              </p>
            </div>
          </li>`;
      }
    )
    .join('');

  refs.moviesGallery.insertAdjacentHTML('beforeend', markup);
}
