import Api from './api';
import refs from './refs';
import { renderMovieCard } from './renderMovieCards.js';
import Loader from './loader';
import scrollTop from './scrollTop';
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

const setPagination = totalItems => {
  const options = {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
  };

  const pagination = new Pagination(refs.pagination, options);

  return pagination;
};

const getPagination = async () => {
  try {
    const data = await Api.getTrendingMovies();
    const pagination = setPagination(data.total_pages);

    pagination.on('beforeMove', ({ page }) => {
      refs.moviesGallery.innerHTML = '';
      Loader.show(refs.loader);
      refs.pagination.style.display = 'none';
      refs.footer.style.display = 'none';

      Api.getTrendingMovies(page)
        .then(data => {
          setTimeout(() => {
            Loader.hide(refs.loader);
            refs.pagination.style.display = 'block';
            refs.footer.style.display = 'block';

            renderMovieCard(data.results);
            scrollTop();
          }, 500);
        })
        .catch(console.error);
    });
  } catch (err) {
    console.error(err.stack);
  }
};

export default getPagination;
