import Api from './api';
import * as basicLightbox from 'basiclightbox';

const playButton = document.querySelector('.modal__btn-trailer');
playButton.addEventListener('click', e => {
  const movieId = e.currentTarget.dataset.id;
  Api.getMovieTrailer(movieId)
    .then(data => {
      const trailer = data.results.find(result => result.type === 'Trailer');

      if (trailer) {
        const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/watch?v=${trailer.key}&autoplay=1"
     width="560"
      height="315"
      frameborder="0"></iframe>
`);
        instance.show();
      } else {
        console.error('Nie znaleziono zwiastunu');
      }
    })
    .catch(error => {
      console.error('Wystąpił błąd:', error);
    });
});
