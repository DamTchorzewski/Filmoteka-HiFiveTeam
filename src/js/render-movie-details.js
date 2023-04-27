import refs from './refs';
import noImg from '../images/movies-gallery/noimg.jpg';

const renderMovieDetails = ({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) => {
  const posterSize = window.devicePixelRatio > 1 ? 'original' : 'w500';
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/${posterSize}/${poster_path}`
    : noImg;

  const categories = genres.map(({ name }) => name).join(', ');

  const markup = `
  <img class="modal__img" src="${poster}" alt="" width="240" height="357" />
  <div class="modal__info">
    <h2 class="modal__title">${title}</h2>
    <div class="modal__list-box">
      <ul class="modal__list list">
        <li class="modal__list-item">
          <p class="modal__list-right">Vote/Votes</p>
        </li>
        <li class="modal__list-item">
          <p class="modal__list-right">Popularity</p>
        </li>
        <li class="modal__list-item">
          <p class="modal__list-right">Original Title</p>
        </li>
        <li class="modal__list-item">
          <p class="modal__list-right">Genre</p>
        </li>
      </ul>
      <ul class="modal__list list">
        <li class="modal__list-item modal__left">
          <p class="modal__list-left">
            <span class="modal__list-vote">${vote_average.toFixed(1)}</span>
            <span class="modal__list-slash">/</span>
            <span class="modal__list-votes">${vote_count}</span>
          </p>
        </li>
        <li class="modal__list-item modal__left">
          <p class="modal__list-left">${popularity.toFixed(1) || '--'}</p>
        </li>
        <li class="modal__list-item modal__left">
          <p class="modal__list-left">${title}</p>
        </li>
        <li class="modal__list-item modal__left">
          <p class="modal__list-left">${categories || 'Unknown genre'}</p>
        </li>
      </ul>
    </div>
    <h3 class="modal__subtitle">ABOUT</h3>
    <p class="modal__description">${overview || 'No description'}</p>
  </div>
  `;

  refs.modalMovieInfo.insertAdjacentHTML('beforeend', markup);
};

export default renderMovieDetails;
