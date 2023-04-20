const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
const watched = getWatched() || [];
const queue = getQueue() || [];

function setWatched(arr) {
  try {
    localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
  } catch (err) {
    console.error(err.stack);
  }
}

function setQueue(arr) {
  try {
    localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
  } catch (err) {
    console.error(err.stack);
  }
}

function getWatched() {
  try {
    return JSON.parse(localStorage.getItem(KEY_WATCHED));
  } catch (err) {
    console.error(err.stack);
  }
}

function getQueue() {
  try {
    return JSON.parse(localStorage.getItem(KEY_QUEUE));
  } catch (err) {
    console.error(err.stack);
  }
}

const Storage = {
  watched,
  queue,
  setWatched,
  setQueue,
  getWatched,
  getQueue,
};

export default Storage;
