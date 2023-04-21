import refs from './refs';
import Storage from './localStorage';

const refresh = id => {
  if (Storage.watched.includes(id)) {
    refs.addToWatchedBtn.classList.add('active-btn');
    refs.addToWatchedBtn.innerText = 'REMOVE FROM WATCHED';
  }

  if (!Storage.watched.includes(id)) {
    refs.addToWatchedBtn.classList.remove('active-btn');
    refs.addToWatchedBtn.innerText = 'ADD TO WATCHED';
  }

  if (Storage.queue.includes(id)) {
    refs.addToQueueBtn.classList.add('active-btn');
    refs.addToQueueBtn.innerText = 'REMOVE FROM QUEUE';
  }

  if (!Storage.queue.includes(id)) {
    refs.addToQueueBtn.classList.remove('active-btn');
    refs.addToQueueBtn.innerText = 'ADD TO QUEUE';
  }
};

export default refresh;
