const show = loader => {
  loader.classList.remove('visually-hidden');
};

const hide = loader => {
  loader.classList.add('visually-hidden');
};

const Loader = { show, hide };

export default Loader;
