const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
export const watched = getWatchedLocalStorage() || [];
export const queue = getQueueLocalStorage() || [];

export function setWatched(arr) {
  try {
    localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
  } catch (err) {
    console.error(err);
  }
}

export function setQueue(arr) {
  try {
    localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
  } catch (err) {
    console.error(err);
  }
}

export function getWatched() {
  try {
    return JSON.parse(localStorage.getItem(KEY_WATCHED));
  } catch (err) {
    console.error(err);
  }
}

export function getQueue() {
  try {
    return JSON.parse(localStorage.getItem(KEY_QUEUE));
  } catch (err) {
    console.error(err);
  }
}
