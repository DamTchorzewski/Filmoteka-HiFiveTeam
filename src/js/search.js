import { setPagination } from './pagination';
import refs from './refs';
import Api from './api';
import { renderMovieCard } from './render-movie-cards.js';
import Loader from './loader';
import scrollTop from './scroll-top';

let paginationSearch;

const searchMovie = async (e, currentPage = 1) => {
  e.preventDefault();

  refs.errorMessage.style.display = 'none';
  refs.moviesGallery.innerHTML = '';

  const searchValue = refs.input.value.trim();
  Loader.show(refs.loader);

  refs.pagination.style.display = 'none';
  refs.footer.style.display = 'none';

  try {
    const data = await Api.getMoviesByQuery(searchValue, currentPage);
    const pagination = setPagination(data.total_results, refs.pagination);

    if (data.results.length === 0) {
      refs.errorMessage.style.display = 'block';
      refs.pagination.style.display = 'none';
    } else {
      refs.errorMessage.style.display = 'none';
      refs.pagination.style.display = 'block';
      refs.footer.style.display = 'block';

      renderMovieCard(data.results);
      scrollTop();

      if (!paginationSearch) {
        paginationSearch = setPagination(data.total_results, refs.pagination);

        paginationSearch.on('beforeMove', async ({ page }) => {
          refs.moviesGallery.innerHTML = '';
          Loader.show(refs.loader);
          refs.pagination.style.display = 'none';
          refs.footer.style.display = 'none';

          try {
            const data = await Api.getMoviesByQuery(searchValue, page);
            renderMovieCard(data.results);
            scrollTop();
          } catch (err) {
            console.error(err);
          } finally {
            Loader.hide(refs.loader);
            refs.pagination.style.display = 'block';
            refs.footer.style.display = 'block';
          }
        });
      } else {
        paginationSearch.reset(data.total_results);
      }
    }
  } catch (err) {
    console.error(err);
    refs.errorMessage.style.display = 'block';
    refs.pagination.style.display = 'none';
  } finally {
    Loader.hide(refs.loader);
  }
};

refs.searchBtn.addEventListener('click', e => searchMovie(e));
