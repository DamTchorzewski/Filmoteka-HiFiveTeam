import renderMovieCard from './filmsListMarkupTempl.js';

const filmsListRef = document.querySelector('.gallery__container');

export default function renderFilmsMarkup(films) {
  filmsListRef.innerHTML = renderMovieCard(movies);
}
