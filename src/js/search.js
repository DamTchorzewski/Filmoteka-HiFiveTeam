import Api from './api.js';
import { renderMovieCard } from './renderMovieCards.js';
import refs from './refs.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const input = document.querySelector('.form__input');
const searchBtn = document.querySelector('.form__btn');
const errorMessage = document.querySelector('.form__search-error');
const gallery = document.querySelector('.gallery__container');
let pagination; // deklarujemy zmienną poza funkcją

errorMessage.style.display = 'none';

const searchMovie = (e, page ) => {
  e.preventDefault();
  gallery.innerHTML = '';
  const searchValue = input.value;

  Api.getMoviesByQuery(searchValue, page) // dodaj drugi argument z numerem strony
    .then(data => {
      if (data.results.length === 0) {
        errorMessage.style.display = 'block';
        refs.pagination.style.display = 'none';
      } else {
        errorMessage.style.display = 'none';
        renderMovieCard(data.results);
        refs.pagination.style.display = 'block';
        
        
        
        // Utwórz nową instancję Pagination i ustaw jej właściwości
        const pagination = new Pagination(refs.pagination, {
          totalItems: data.total_results,
          itemsPerPage: 20,
          visiblePages: 5,
          centerAlign: true,
          currentPage: page, // ustaw bieżącą stronę na wartość przekazaną jako argument
        });

        // Ustaw słuchacza zdarzeń beforeMove, który będzie wywoływany przy zmianie strony
        pagination.on('beforeMove', ({ page }) => {
  searchMovie(e, page); // wywołaj funkcję searchMovie z nowym numerem strony
});
pagination.on('afterMove', () => {
  const paginationContainer = refs.pagination.parentNode;
  if (page === 1) {
    paginationContainer.appendChild(refs.pagination);
  } else {
    const movieCards = document.querySelectorAll('.movie-card');
    const lastMovieCard = movieCards[movieCards.length - 1];
    paginationContainer.insertBefore(refs.pagination, lastMovieCard.nextSibling);
  }
});
      }
    })
    .catch(error => {
      console.log(error);
    });
};
searchBtn.addEventListener('click', e => searchMovie(e, 1));

// async function onFormSubmit(evt) {
//   evt.preventDefault();

//   try {
//     filmsApi.searchQuery = evt.currentTarget.elements.searchQuery.value.trim();
//     if (filmsApi.searchQuery === '') return;

//     const films = await filmsApi.getMoviesByQuery();
//     if (films.length === 0) {
//       addErrorStyles();
//       errorMessage.style.display = 'block';
//     } else {
//       resetErrorStyles();
//     }

//     renderFilmsMarkup(films);
//     // renderFilmsMarkup(films); TO DO: import ^

//     searchFormRef.reset();
//   } catch (error) {
//     console.log(error);
//   }
// }

// export function resetErrorStyles() {
//   galleryRef.classList.remove('wrong');
//   paginationRef.style.display = 'flex';
//   errorMessage.style.display = 'none';
// }

// export function addErrorStyles() {
//   galleryRef.classList.add('wrong');
//   paginationRef.style.display = 'none';
//   errorMessage.style.display = 'block';
// }
