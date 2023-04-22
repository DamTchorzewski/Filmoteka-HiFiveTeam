const refs = {
  moviesGallery: document.querySelector('.movies-gallery'),
  galleryContainer: document.querySelector('.gallery__container'),
  pagination: document.querySelector('#pagination'),
  loader: document.querySelector('.loader'),
  footer: document.querySelector('.footer'),
  modalWindow: document.querySelector('.modal'),
  modalWindowInfo: document.querySelector('.modal__wrapper'),
  modalWindowClose: document.querySelector('.modal__btn-close'),
  backdrop: document.querySelector('.backdrop'),
  modalBtns: document.querySelectorAll('.modal__btn'),
  openTeamModal: document.querySelector('[team-modal-open]'),
  closeTeamModal: document.querySelector('[team-modal-close]'),
  teamModal: document.querySelector('[team-modal]'),
  addToWatchedBtn: document.querySelector('#addToWatched'),
  addToQueueBtn: document.querySelector('#addToQueue'),
  watchTrailer: document.querySelector('#watchTrailer'),
};

export default refs;
