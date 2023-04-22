import refs from './refs';

(() => {
  window.addEventListener('click', clickBackdropCloseModal);
  refs.openTeamModal.addEventListener('click', toggleModal);
  refs.closeTeamModal.addEventListener('click', () => {
    toggleModal();
    refs.body.style.overflow = 'unset';
  });

  function clickBackdropCloseModal(e) {
    if (e.target === refs.teamModal) {
      refs.teamModal.classList.add('is-hidden');
      refs.body.style.overflow = 'unset';
    }
  }

  function closeModalByClickEscape(e) {
    if (e.code === 'Escape') {
      refs.teamModal.classList.add('is-hidden');
      refs.body.style.overflow = 'unset';
      window.removeEventListener('keydown', closeModalByClickEscape);
    }
  }

  function toggleModal() {
    refs.teamModal.classList.toggle('is-hidden');
    refs.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeModalByClickEscape);
  }
})();
