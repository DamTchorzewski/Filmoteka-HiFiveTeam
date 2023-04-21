import refs from './refs';

const open = () => {
  refs.backdrop.classList.remove('visually-hidden');
  refs.modalWindow.classList.remove('visually-hidden');

  window.addEventListener('keydown', closeOnEsc);
};

const close = () => {
  refs.backdrop.classList.add('visually-hidden');
  refs.modalWindow.classList.add('visually-hidden');
  refs.body.style.overflow = 'unset';
};

const closeOnEsc = ({ code }) => {
  if (code === 'Escape') {
    close();
    window.removeEventListener('keydown', closeOnEsc);
  }
};

const closeOnBackdrop = e => {
  if (e.target === e.currentTarget) close();
};

const Modal = { open, close, closeOnEsc, closeOnBackdrop };

export default Modal;
