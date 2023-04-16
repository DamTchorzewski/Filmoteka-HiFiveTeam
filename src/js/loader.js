const show = loader => {
  loader.classList.remove('is-hidden');
};

const hide = loader => {
  loader.classList.add('is-hidden');
};

const Loader = { show, hide };

export default Loader;
