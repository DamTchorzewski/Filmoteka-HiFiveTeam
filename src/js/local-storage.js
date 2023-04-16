const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
export const watched = getWatchedLocalSotrage() || [];
export const queue = getQueueLocalStoradge() || [];

export function getWatchedLocalSotrage() {
  try {
    return JSON.parse(localStorage.getItem(KEY_WATCHED));
  } catch (err) {
    console.error(err);
  }
}

export function getQueueLocalStoradge() {
  try {
    return JSON.parse(localStorage.getItem(KEY_QUEUE));
  } catch (err) {
    console.error(err);
  }
}

export function setWatchedLocalStorage(arr) {
  localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
}

export function setQueueLocalStorage(arr) {
  localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
}
