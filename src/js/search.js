import { API } from './api';
import renderFilmsMarkup from './renderMovieCards';
// import renderFilmsMarkup from ''; TO DO: (add genres?)

const searchFormRef = document.querySelector('.form');
const errorMessage = document.querySelector('.form__search-error');
const filmsApi = new API();
const galleryRef = document.querySelector('.gallery');
// const galleryRef = document.querySelector(''); TO DO: (add gallery?)
const paginationRef = document.querySelector('.pagination');
// const paginationRef = document.querySelector(''); TO DO: (add pagination?)

searchFormRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(evt) {
  evt.preventDefault();

  try {
    filmsApi.searchQuery = evt.currentTarget.elements.searchQuery.value.trim();
    if (filmsApi.searchQuery === '') return;

    const films = await filmsApi.getMoviesByQuery();
    if (films.length === 0) {
      addErrorStyles();
      errorMessage.style.display = 'block';
    } else {
      resetErrorStyles();
    }

    renderFilmsMarkup(films);
    // renderFilmsMarkup(films); TO DO: import ^

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
