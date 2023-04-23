import Api from './api';
import * as basicLightbox from 'basiclightbox';
import { Notify } from 'notiflix';
import refs from './refs';

refs.watchTrailer.addEventListener('click', e => {
  const movieId = e.currentTarget.dataset.id;
  Api.getMovieTrailer(movieId)
    .then(data => {
      const trailer = data.results.find(result => result.type === 'Trailer');

      if (trailer) {
        const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${trailer.key}?autoplay=1"
     width="560"
      height="315"
      frameborder="0"></iframe>
`);
        const closeOnEsc = ({ code }) => {
          if (code === 'Escape') {
            instance.close(window.removeEventListener('keydown', closeOnEsc));
            refs.watchTrailer.classList.toggle('active-btn');
          }
        };

        instance.show(window.addEventListener('keydown', closeOnEsc));

        refs.watchTrailer.classList.toggle('active-btn');
      } else {
        console.error('Nie znaleziono zwiastunu');
        Notify.failure('Ops, trailer was not found!', {
          position: 'center-center',
          timeout: 3500,
          pauseOnHover: false,
        });
      }
    })
    .catch(error => {
      console.error('Wystąpił błąd:', error);
    });
});
