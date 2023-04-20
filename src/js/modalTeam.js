import refs from './refs';

(() => {
  window.addEventListener('click', clickBackdropCloseModal);
  window.addEventListener('keydown', closeModalByClickEscape);
  refs.openTeamModal.addEventListener('click', toggleModal);
  refs.closeTeamModal.addEventListener('click', toggleModal);

  function clickBackdropCloseModal(e) {
    if (e.target === refs.teamModal) {
      refs.teamModal.classList.add('is-hidden');
      document.body.classList.toggle('stop-scrolling');
    }
  }

  function closeModalByClickEscape(e) {
    if (e.code === 'Escape') {
      refs.teamModal.classList.add('is-hidden');
      document.body.classList.toggle('stop-scrolling');
    }
  }

  function toggleModal() {
    refs.teamModal.classList.toggle('is-hidden');
    document.body.classList.toggle('stop-scrolling');
  }
})();
