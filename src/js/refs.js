const refs = {
  moviesGallery: document.querySelector('.moviesGallery'),
  pagination: document.querySelector('#pagination'),
  loader: document.querySelector('.loader'),
  footer: document.querySelector('.footer'),
  watchedBtn: document.querySelector(`#watched`),
  queueBtn: document.querySelector('#queue'),

  windowModal: document.querySelector('[window-modal]'),
  windowCloseButton: document.querySelector('[window-modal-close]'),
  darkerBackdrop: document.querySelector('.darker'),
  modal: document.querySelector('#modal'),
  modalIframe: document.querySelector('iframe'),
  trailerBtn: document.querySelector(`#trailer`),
  addModalCard: document.querySelector('.modal-card-to-add'),

  openTeamModal: document.querySelector('[team-modal-open]'),
  closeTeamModal: document.querySelector('[team-modal-close]'),
  teamModal: document.querySelector('[team-modal]'),
};

export default refs;
