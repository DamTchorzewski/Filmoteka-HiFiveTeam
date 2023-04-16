import Api from './api.js';
import { movieGenres } from './genres.js';

const moviesGallery = document.querySelector('.gallery__container');

Api.getTrendingMovies()
  .then(data => {
    renderMovieCard(data.results);
  })
  .catch(error => {
    console.log(error);
  });

export function renderMovieCard(movies) {
  const markup = movies
    .map(({ title, name, release_date, poster_path, genre_ids }) => {
      const moviePoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
      const movieDate = release_date ? release_date.slice(0, 4) : 'Unknown';
      const movieName = title ? title : name;

      // Wyszukiwanie gatunku filmowego po id:
      const matchedUsers = genre_ids
        .map(id => {
          const genre = movieGenres.find(g => g.id === id);
          return genre ? `${genre.name}` : '';
        })
        .filter(Boolean)
        .join(', ');

      return `<li class="movie-container__card">
            <div class="poster"><img class="poster__img" src="${moviePoster}" alt="${title} poster" loading="lazy" /></div>
            <div class="movieInfo">
               <p class="movieInfo__item movieInfo--title">${movieName}</p>
               <p class="movieInfo__item">
                     ${matchedUsers} | ${movieDate}
              </p>
            </div>
          </li>`;
    })
    .join('');
  moviesGallery.insertAdjacentHTML('beforeend', markup);
}
