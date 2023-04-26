import Api from './api';
import refs from './refs';
import * as basicLightbox from 'basiclightbox';
import { Notify } from 'notiflix';

refs.watchTrailer.addEventListener('click', async e => {
  try {
    const movieId = e.currentTarget.dataset.id;
    const data = await Api.getMovieTrailer(movieId);
    const trailer = data.results.find(result => result.type === 'Trailer');

    if (trailer) {
      const movieTrailer = basicLightbox.create(
        `
          <iframe src="https://www.youtube.com/embed/${trailer.key}"
            width="800"
            height="500"
            frameborder="0"
            allowfullscreen>
          </iframe>`,
        {
          onShow: movieTrailer => {
            refs.watchTrailer.classList.add('active-btn');
          },
          onClose: movieTrailer => {
            refs.watchTrailer.classList.remove('active-btn');
          },
        }
      );

      const closeOnEsc = ({ code }) => {
        if (code === 'Escape') {
          movieTrailer.close(window.removeEventListener('keydown', closeOnEsc));
        }
      };

      movieTrailer.show(window.addEventListener('keydown', closeOnEsc));
    } else {
      Notify.failure('Ops, trailer was not found!', {
        position: 'center-center',
        timeout: 3500,
        pauseOnHover: false,
      });
    }
  } catch (err) {
    console.error(err.stack);
  }
});
