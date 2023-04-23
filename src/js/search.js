import Api from './api.js';
import { renderMovieCard } from './renderMovieCards.js';
import refs from './refs.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import Loader from './loader';
import scrollTop from './scrollTop';

refs.errorMessage.style.display = 'none';

const searchMovie = (e, page) => {
  e.preventDefault();
  refs.errorMessage.style.display = 'none';
  refs.moviesGallery.innerHTML = '';
  const searchValue = refs.input.value.trim();
  Loader.show(refs.loader);
  refs.pagination.style.display = 'none';
  refs.footer.style.display = 'none';

  Api.getMoviesByQuery(searchValue, page).then(data => {
    setTimeout(() => {
      if (data.results.length === 0) {
        refs.errorMessage.style.display = 'block';
        refs.pagination.style.display = 'none';
        Loader.hide(refs.loader);
      } else {
        refs.errorMessage.style.display = 'none';
        Loader.hide(refs.loader);
        refs.pagination.style.display = 'block';
        refs.footer.style.display = 'block';
        renderMovieCard(data.results);
        scrollTop();

        const pagination = new Pagination(refs.pagination, {
          totalItems: data.total_results,
          itemsPerPage: 20,
          visiblePages: 5,
          centerAlign: true,
          currentPage: page,
        });

        pagination.on('beforeMove', ({ page }) => {
          searchMovie(e, page);
        });

        pagination.on('afterMove', () => {
          const paginationContainer = refs.pagination.parentNode;
          if (page === 1) {
            paginationContainer.appendChild(refs.pagination);
          } else {
            const movieCards = document.querySelectorAll('.movie-card');
            const lastMovieCard = movieCards[movieCards.length - 1];
            paginationContainer.insertBefore(
              refs.pagination,
              lastMovieCard.nextSibling
            );
          }
        });
      }
    }, 500);
  });
};

refs.searchBtn.addEventListener('click', e => searchMovie(e, 1));
