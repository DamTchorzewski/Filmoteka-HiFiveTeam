import refs from './refs';
import Storage from './local-storage';

const toggleMovieToWatched = e => {
  const id = e.currentTarget.dataset.id;
  onAddToWatched(id);

  if (e.currentTarget.innerText === 'ADD TO WATCHED') {
    e.currentTarget.classList.add('active-btn');
    return (e.currentTarget.innerText = 'REMOVE FROM WATCHED');
  }

  e.currentTarget.classList.remove('active-btn');
  e.currentTarget.innerText = 'ADD TO WATCHED';
};

const toggleMovieToQueue = e => {
  const id = e.currentTarget.dataset.id;
  onAddToQueue(id);

  if (e.currentTarget.innerText === 'ADD TO QUEUE') {
    e.currentTarget.classList.add('active-btn');
    return (e.currentTarget.innerText = 'REMOVE FROM QUEUE');
  }

  e.currentTarget.classList.remove('active-btn');
  e.currentTarget.innerText = 'ADD TO QUEUE';
};

refs.addToWatchedBtn.addEventListener('click', toggleMovieToWatched);
refs.addToQueueBtn.addEventListener('click', toggleMovieToQueue);

function onAddToWatched(id) {
  if (Storage.watched.includes(id)) {
    Storage.watched.splice(Storage.watched.indexOf(id), 1);

    return Storage.setWatched(Storage.watched);
  }

  Storage.watched.push(id);
  Storage.setWatched(Storage.watched);
}

function onAddToQueue(id) {
  if (Storage.queue.includes(id)) {
    Storage.queue.splice(Storage.queue.indexOf(id), 1);

    return Storage.setQueue(Storage.queue);
  }

  Storage.queue.push(id);
  Storage.setQueue(Storage.queue);
}
