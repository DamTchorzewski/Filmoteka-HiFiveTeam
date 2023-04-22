import refs from './refs';
import Api from './api';
import noImg from '../images/moviesGallery/noImg.jpg';
import Storage from './localStorage';

refs.myLibrary.addEventListener('click', e => {
  const idMovies = Storage.getWatched();
  Api.getMoviesById(idMovies)
    .then(result => {
      renderMovieCard(result);
    })
    .catch(error => {
      console.log(error);
    });
  if (!refs.btnWatched.classList.contains('active-btn')) {
    refs.btnWatched.classList.add('active-btn');
    refs.btnQueue.classList.remove('active-btn');
    return;
  }
});

refs.btnWatched.addEventListener('click', e => {
  const idMovies = Storage.getWatched();
  Api.getMoviesById(idMovies)
    .then(result => {
      renderMovieCard(result);
    })
    .catch(error => {
      console.log(error);
    });
  if (!e.currentTarget.classList.contains('active-btn')) {
    e.currentTarget.classList.add('active-btn');
    refs.btnQueue.classList.remove('active-btn');
    return;
  }
});

refs.btnQueue.addEventListener('click', e => {
  const idMovies = Storage.getQueue();
  Api.getMoviesById(idMovies)
    .then(result => {
      renderMovieCard(result);
    })
    .catch(error => {
      console.log(error);
    });
  if (!e.currentTarget.classList.contains('active-btn')) {
    e.currentTarget.classList.add('active-btn');
    refs.btnWatched.classList.remove('active-btn');
    return;
  }
});

function renderMovieCard(movies) {
  const markup = movies
    .map(
      ({
        id,
        title,
        original_title,
        release_date,
        first_air_date,
        poster_path,
        genres,
      }) => {
        const moviePoster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : noImg;

        const movieDate = release_date
          ? release_date.slice(0, 4)
          : first_air_date
          ? first_air_date.slice(0, 4)
          : 'Unknown year';
        const movieName = title ? title : original_title;

        // Wyświetlane są tylko dwa pierwsze gatunki filmowe
        let matchedGenres = genres.map(genre => genre.name);
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
  refs.libraryGallery.innerHTML = markup;
}
