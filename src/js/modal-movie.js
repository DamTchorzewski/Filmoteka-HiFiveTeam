import { Notify } from 'notiflix';
import renderMovieDetails from './render-movie-details';
import Api from './api';
import refs from './refs';
import Modal from './modal-open-close';
import refresh from './refresh';
import Loader from './loader';

const movieDetailsOnClick = async e => {
  try {
    const getLi = e.target.closest('.movie-container__card');
    if (!getLi) return;

    const id = getLi.dataset.id;
    refresh(id);

    refs.loader.style.position = 'fixed';
    Loader.show(refs.loader);

    [...refs.modalBtns].map(btn => btn.setAttribute('data-id', `${id}`));

    const movieDetails = await Api.getMovieDetails(id);

    if (!movieDetails) {
      Loader.hide(refs.loader);
      refs.loader.style.position = 'absolute';

      return Notify.failure("Ops, movie's info was not found!", {
        position: 'center-center',
        timeout: 3500,
        pauseOnHover: false,
      });
    }

    refs.modalMovieInfo.innerHTML = '';
    renderMovieDetails(movieDetails);

    Loader.hide(refs.loader);
    refs.loader.style.position = 'absolute';

    refs.body.style.overflow = 'hidden';
    setTimeout(() => Modal.open(), 50);
    Modal.closeOnEsc(e);
  } catch (err) {
    console.error(err.stack);
  }
};

refs.galleryContainer.addEventListener('click', movieDetailsOnClick);

refs.modalMovieClose.addEventListener('click', () => {
  Modal.close();
});

refs.backdrop.addEventListener('click', e => {
  Modal.closeOnBackdrop(e);
});
