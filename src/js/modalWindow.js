import Api from './api';
import refs from './refs';
import {
  watched,
  queue,
  setWatched,
  setQueue,
  getWatched,
  getQueue,
} from './localStorage';
import { movieGenres } from './genres';

window.addEventListener('keydown', closeModalHandler);
window.addEventListener('click', clickBackdropCloseModal);
refs.windowCloseButton.addEventListener('click', onCloseButton);
refs.moviesGallery.addEventListener('click', showCard);

function clickBackdropCloseModal(e) {
  if (e.target === refs.windowModal) {
    onCloseButton(e);
    document.body.style.overflow = '';
    refs.darkerBackdrop.classList.add('is-hidden');
  }
}

function closeModalHandler(e) {
  if (e.code === 'Escape') {
    onCloseButton(evt);
    document.body.style.overflow = '';
    refs.darkerBackdrop.classList.add('is-hidden');
  }
}

function onCloseButton(e) {
  if (e.target === backdropModal || e.code === 'Escape') {
    refs.windowModal.classList.add('is-hidden');

    document.body.style.overflow = '';
    refs.darkerBackdrop.classList.add('is-hidden');
  }

  refs.windowModal.classList.add('is-hidden');

  document.body.style.overflow = '';
  refs.darkerBackdrop.classList.add('is-hidden');
}

async function showCard(e) {
  e.preventDefault();
  document.body.style.overflow = 'hidden';
  if (e.target.nodeName === 'ul') {
    return;
  }

  refs.windowModal.classList.remove('is-hidden');
  refs.darkerBackdrop.classList.add('is-hidden');

  const id = e.target.id;

  const movie = await Api.getMovieDetails(id);
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = movie;

  let genre = movieGenres(genres);

  const youtubeTrailer = await Api.getMovieTrailer(id);
  console.log('youtubeTrailer :>> ', youtubeTrailer);

  createModalCard(refs.addModalCard);

  function createModalCard(cardForModal) {
    cardForModal.innerHTML = `
    <div class="modal__poster-thumb">
          <img class="modal__poster" src="${
            Api.API_KEY_IMG
          }${poster_path}" alt="${original_title} poster">
        </div>
   
        <div class="modal__info-thumb">
            <h2 class="modal__title">${title}</h2>
        <table class="modal__info">
            <tr class="modal__info-entry">
            <td class="modal__info-key">Vote / Votes</td>
            <td><span class="modal__info-value-vote modal__info-value-vote--accent">${vote_average.toFixed(
              [1]
            )}</span> / <span class="modal__info-value-vote">${vote_count}</span></td>
            </tr>
            <tr class="modal__info-entry">
                <td class="modal__info-key">Popularity</td>
                <td class="modal__info-value">${popularity.toFixed([1])}</td>
            </tr>
            <tr class="modal__info-entry">
                <td class="modal__info-key">Original Title</td>
                <td class="modal__info-value modal__info-value-title">${original_title}</td>
        </tr>
            <tr class="modal__info-entry">
                <td class="modal__info-key">Genre</td>
                <td class="modal__info-value">${genre}</td>
            </tr>
        </table>
        <h3 class="modal__about">About</h3>
        <p class="modal__about-text">${overview}</p>
            <div class="modal__button-container">
                <button id="watched" type="button" class="modal__button modal__button-watched">add to watched</button>
                <button id="queue" type="button" class="modal__button modal__button-queue">add to queue</button>
            </div>
            <div class="modal__button-trailer-wrap">
            <button id="trailer" type="button" class="modal__button modal__button-trailer"><span class="svg_span"
                ><svg width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" style="vertical-align: bottom;"><path d="M61.115,18.856C63.666,21.503,64,25.709,64,36s-0.334,14.497-2.885,17.144C58.563,55.791,55.906,56,36,56  s-22.563-0.209-25.115-2.856C8.334,50.497,8,46.291,8,36s0.334-14.497,2.885-17.144S16.094,16,36,16S58.563,16.209,61.115,18.856z M31.464,44.476l13.603-8.044l-13.603-7.918V44.476z"/></svg></span>
            Trailer</button>
                <iframe id="video" class="modal__iframe is-hidden" width="100%" height="100%" src="https://www.youtube.com/embed/${youtubeTrailer}?enablejsapi=1" 
                title="Mia and me - Mia and me Day 2014" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            </div>
        </div>
    </div>
  `;

    onWatchedCheck();
    onQueueCheck();

    function onWatchedCheck() {
      if (watched.includes(id)) {
        refs.watchedBtn.textContent = 'remove from watched';
        return;
      }
      refs.watchedBtn.textContent = 'add to watched';
    }
    function onQueueCheck() {
      if (queue.includes(id)) {
        refs.queueBtn.textContent = 'remove from queue';
        return;
      }
      refs.queueBtn.textContent = 'add to queue';
    }
  }

  refs.watchedBtn.addEventListener('click', onWatchedClick);
  refs.queueBtn.addEventListener('click', onQueueClick);

  function onWatchedClick() {
    if (watched.includes(id)) {
      watched.splice(watched.indexOf(id), 1);
      setWatched(watched);
      refs.watchedBtn.textContent = 'add to watched';
      return;
    }

    watched.push(id);
    setWatched(watched);
    refs.watchedBtn.textContent = 'remove from watched';
  }

  function onQueueClick() {
    if (queue.includes(id)) {
      queue.splice(queue.indexOf(id), 1);
      setQueue(queue);
      refs.queueBtn.textContent = 'add to queue';
      return;
    }

    queue.push(id);
    setQueue(queue);
    refs.queueBtn.textContent = 'remove from queue';
  }

  refs.trailerBtn.addEventListener('click', onTrailerClick);

  function onTrailerClick() {
    refs.modalIframe.classList.remove('is-hidden');
    refs.darkerBackdrop.classList.remove('is-hidden');

    refs.watchedBtn.removeEventListener('click', onWatchedClick);
    refs.queueBtn.removeEventListener('click', onQueueClick);
  }

  refs.darkerBackdrop.addEventListener('click', onDarkerClick);

  function onDarkerClick(e) {
    if (e.target === refs.modalIframe) {
      return;
    }

    if (!modal.contains(e.target)) {
      document
        .querySelector('#video')
        .contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );

      refs.darkerBackdrop.classList.add('is-hidden');
      refs.modalIframe.classList.add('is-hidden');

      refs.watchedBtn.addEventListener('click', onWatchedClick);
      refs.queueBtn.addEventListener('click', onQueueClick);
    }
  }
}
