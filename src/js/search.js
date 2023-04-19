import Api from './api.js';
import renderMovieCard from './renderMovieCards.js';

const searchFormRef = document.querySelector('.form');
const errorMessage = document.querySelector('.form__search-error');
const galleryRef = document.querySelector('.gallery');
const paginationRef = document.querySelector('.pagination');

searchFormRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(evt) {
  evt.preventDefault();

  try {
    Api.getTrendingMovies =
      evt.currentTarget.elements.getTrendingMovies.value.trim();
    if (Api.getTrendingMovies === '') return;

    const films = await Api.getTrendingMovies();
    if (films.length === 0) {
      addErrorStyles();
      errorMessage.style.display = 'block';
    } else {
      resetErrorStyles();
    }

    renderMovieCard(movies);

    searchFormRef.reset();
  } catch (error) {
    console.log(error);
  }
}

export function resetErrorStyles() {
  galleryRef.classList.remove('wrong');
  paginationRef.style.display = 'flex';
  errorMessage.style.display = 'none';
}

export function addErrorStyles() {
  galleryRef.classList.add('wrong');
  paginationRef.style.display = 'none';
  errorMessage.style.display = 'block';
}
