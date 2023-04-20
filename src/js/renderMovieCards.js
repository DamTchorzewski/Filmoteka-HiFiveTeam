import Api from './api.js';
import { movieGenres } from './genres.js';
import refs from './refs.js';
import noImg from '../images/moviesGallery/noImg.jpg';

Api.getTrendingMovies()
  .then(data => {
    renderMovieCard(data.results);
  })
  .catch(error => {
    console.log(error);
  });

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
        const moviePoster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : noImg;

        const movieDate = release_date
          ? release_date.slice(0, 4)
          : first_air_date
          ? first_air_date.slice(0, 4)
          : 'Unknown year';
        const movieName = title ? title : name;

        // Wyszukiwanie gatunku filmowego po id:
        let matchedGenres = genre_ids
          .map(id => {
            const genre = movieGenres.find(g => g.id === id);
            return genre ? [`${genre.name}`] : '';
          })
          .filter(Boolean);

        // Wyświetlane są tylko dwa pierwsze gatunki filmowe
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
