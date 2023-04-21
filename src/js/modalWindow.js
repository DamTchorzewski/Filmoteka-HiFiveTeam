import { Notify } from 'notiflix';
import renderMovieDetails from './renderMovieDetails';
import Api from './api';
import refs from './refs';
import Modal from './modalOpenClose';

const movieDetailsOnClick = async e => {
  try {
    const getLi = e.target.closest('.movie-container__card');
    if (!getLi) return;
    const id = getLi.dataset.id;
    [...refs.modalBtns].map(btn => btn.setAttribute('data-id', `${id}`));

    const movieDetails = await Api.getMovieDetails(id);

    if (!movieDetails) {
      return Notify.failure('Ops, something went wrong!', {
        position: 'center-center',
        timeout: 3500,
        pauseOnHover: false,
      });
    }

    refs.modalWindowInfo.innerHTML = '';
    renderMovieDetails(movieDetails);

    Modal.open();
    Modal.closeOnEsc(e);
  } catch (err) {
    console.error(err.stack);
  }
};

refs.galleryContainer.addEventListener('click', movieDetailsOnClick);

refs.modalWindowClose.addEventListener('click', () => {
  Modal.close();
});

refs.backdrop.addEventListener('click', e => {
  Modal.closeOnBackdrop(e);
});
