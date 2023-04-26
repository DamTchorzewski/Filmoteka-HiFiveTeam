import refs from './refs';
import Api from './api';
import grandma from '../images/my-library/grandma.jpg';
import noimg from '../images/movies-gallery/noimg.jpg';
import Storage from './local-storage';

const showWatched = async () => {
  try {
    const moviesId = Storage.watched;
    const movies = await Api.getMoviesById(moviesId);

    renderMovieCard(movies);
    refs.libraryGallery.style.justifyContent = 'flex-start';

    if (!refs.btnWatched.classList.contains('active-btn')) {
      refs.btnWatched.classList.add('active-btn');
      refs.btnQueue.classList.remove('active-btn');
    }

    if (!Storage.watched.length) {
      refs.libraryGallery.innerHTML = `<li class="grandma"><img src="${grandma}" alt="Grandma, there's nothing here" /></li>`;
      refs.libraryGallery.style.justifyContent = 'center';
    }
  } catch (err) {
    console.error(err.stack);
  }
};

refs.btnWatched.addEventListener('click', showWatched);
showWatched();

const showQueue = async () => {
  try {
    const moviesId = Storage.queue;
    const movies = await Api.getMoviesById(moviesId);

    renderMovieCard(movies);
    refs.libraryGallery.style.justifyContent = 'flex-start';

    if (!refs.btnQueue.classList.contains('active-btn')) {
      refs.btnQueue.classList.add('active-btn');
      refs.btnWatched.classList.remove('active-btn');
    }

    if (!Storage.queue.length) {
      refs.libraryGallery.innerHTML = `<li class="grandma"><img src="${grandma}" alt="Grandma, there's nothing here" /></li>`;
      refs.libraryGallery.style.justifyContent = 'center';
    }
  } catch (err) {
    console.error(err.stack);
  }
};

refs.btnQueue.addEventListener('click', showQueue);

refs.addToWatchedBtn.addEventListener('click', () => {
  if (refs.btnWatched.classList.contains('active-btn')) {
    return showWatched();
  }

  showQueue();
});

refs.addToQueueBtn.addEventListener('click', () => {
  if (refs.btnWatched.classList.contains('active-btn')) {
    return showWatched();
  }

  showQueue();
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
        const posterSize = window.devicePixelRatio > 1 ? 'original' : 'w500';
        const moviePoster = poster_path
          ? `https://image.tmdb.org/t/p/${posterSize}/${poster_path}`
          : noimg;

        const movieDate = release_date
          ? release_date.slice(0, 4)
          : first_air_date
          ? first_air_date.slice(0, 4)
          : 'Unknown year';
        const movieName = title ? title : original_title;

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
