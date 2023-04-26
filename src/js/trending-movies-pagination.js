import Pagination from 'tui-pagination';
import refs from './refs';
import Api from './api';
import { renderMovieCard } from './render-movie-cards.js';
import Loader from './loader';
import scrollTop from './scroll-top';

const initTrendingMoviesPagination = async () => {
  const setPagination = totalItems => {
    const options = {
      totalItems,
      itemsPerPage: 20,
      visiblePages: 5,
      centerAlign: true,
    };

    const pagination = new Pagination(refs.pagination, options);

    pagination.on('beforeMove', async ({ page }) => {
      refs.moviesGallery.innerHTML = '';
      Loader.show(refs.loader);
      refs.pagination.style.display = 'none';
      refs.footer.style.display = 'none';

      try {
        const data = await Api.getTrendingMovies(page);

        setTimeout(() => {
          Loader.hide(refs.loader);
          refs.pagination.style.display = 'block';
          refs.footer.style.display = 'block';

          renderMovieCard(data.results);
          scrollTop();
        }, 500);
      } catch (error) {
        console.error(error);
      }
    });

    return pagination;
  };

  try {
    const data = await Api.getTrendingMovies();
    const pagination = setPagination(data.total_pages);
  } catch (error) {
    console.error(error.stack);
  }
};

initTrendingMoviesPagination();
