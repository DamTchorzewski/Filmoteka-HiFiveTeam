import refs from './refs';

(() => {
  try {
    window.addEventListener('click', clickBackdropCloseModal);
    window.addEventListener('keydown', closeModalByClickEscape);
    refs.openTeamModal.addEventListener('click', toggleModal);
    refs.closeTeamModal.addEventListener('click', toggleModal);

    function clickBackdropCloseModal(e) {
      if (e.target === refs.teamModal) {
        refs.teamModal.classList.add('is-hidden');
      }
    }

    function closeModalByClickEscape(e) {
      if (e.code === 'Escape') {
        refs.teamModal.classList.add('is-hidden');
      }
    }

    function toggleModal() {
      refs.teamModal.classList.toggle('is-hidden');
      refs.body.style.overflow = 'hidden';
      setTimeout(() => refs.openTeamModal(), 50);
      refs.closeTeamModal(e);
    }
  } catch (err) {
    console.error(err.stack);
  }
})();
