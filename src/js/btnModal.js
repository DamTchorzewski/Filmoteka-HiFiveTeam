import refs from './refs';
import Storage from './localStorage';

const toggleMovieToWatched = e => {
  try {
    const getId = e.currentTarget.dataset.id;
    onAddToWatched(getId);
  } catch (err) {
    console.error(err.stack);
  }
};
const toggleMovieToQueue = e => {
  try {
    const getId = e.currentTarget.dataset.id;
    onAddToQueue(getId);
  } catch (err) {
    console.error(err.stack);
  }
};

refs.addToQueueBtn.addEventListener('click', e => {
  toggleMovieToQueue(e);

  console.log(e.currentTarget.innerText);
  if (e.currentTarget.innerText === 'ADD TO QUEUE') {
    e.currentTarget.classList.add('active-btn');
    e.currentTarget.innerText = 'REMOVE FROM QUEUE';
    return;
  }
  e.currentTarget.classList.remove('active-btn');
  e.currentTarget.innerText = 'ADD TO QUEUE';
});
refs.addToWatchedBtn.addEventListener('click', e => {
  toggleMovieToQueue(e);

  console.log(e.currentTarget.innerText);
  if (e.currentTarget.innerText === 'ADD TO WATCHED') {
    e.currentTarget.classList.add('active-btn');
    e.currentTarget.innerText = 'REMOVE FROM WATCHED';
    return;
  }
  e.currentTarget.classList.remove('active-btn');
  e.currentTarget.innerText = 'ADD TO WATCHED';
});

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
