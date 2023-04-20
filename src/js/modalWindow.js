import { Notify } from 'notiflix';
import renderMovieDetails from './renderMovieDetails';
import Api from './api';
import refs from './refs';
import Modal from './modalOpenClose';
import Storage from './localStorage';

const movieDetailsOnClick = async e => {
  try {
    const getLi = e.target.closest('.movie-container__card');
    if (!getLi) return;
    const id = getLi.dataset.id;

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
    Modal.closeOnBackdrop(e);
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

// localStorage //

function onWatchedCheck() {
  if (watched.includes(id)) {
    refs.watchedBtn.textContent = 'remove from watched';
    return;
  }
  refs.watchedBtn.textContent = 'add to watched';
}

function onQueueCheck() {
  if (Storage.queue.includes(id)) {
    refs.queueBtn.textContent = 'remove from queue';
    return;
  }
  refs.queueBtn.textContent = 'add to queue';
}

function onWatchedClick() {
  if (Storage.watched.includes(id)) {
    Storage.watched.splice(watched.indexOf(id), 1);
    Storage.setWatched(watched);
    refs.watchedBtn.textContent = 'add to watched';
    return;
  }

  Storage.watched.push(id);
  Storage.setWatched(watched);
  refs.watchedBtn.textContent = 'remove from watched';
}

function onQueueClick() {
  if (Storage.queue.includes(id)) {
    Storage.queue.splice(queue.indexOf(id), 1);
    Storage.setQueue(queue);
    refs.queueBtn.textContent = 'add to queue';
    return;
  }

  Storage.queue.push(id);
  Storage.setQueue(queue);
  refs.queueBtn.textContent = 'remove from queue';
}
