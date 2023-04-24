import { Notify } from 'notiflix';
import renderMovieDetails from './renderMovieDetails';
import Api from './api';
import refs from './refs';
import Modal from './modalOpenClose';
import refresh from './refresh';

const movieDetailsOnClick = async e => {
  try {
    const getLi = e.target.closest('.movie-container__card');
    if (!getLi) return;

    const id = getLi.dataset.id;
    refresh(id);

    [...refs.modalBtns].map(btn => btn.setAttribute('data-id', `${id}`));

    const movieDetails = await Api.getMovieDetails(id);

    if (!movieDetails) {
      return Notify.failure("Ops, movie's info was not found!", {
        position: 'center-center',
        timeout: 3500,
        pauseOnHover: false,
      });
    }

    refs.modalMovieInfo.innerHTML = '';
    renderMovieDetails(movieDetails);

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
