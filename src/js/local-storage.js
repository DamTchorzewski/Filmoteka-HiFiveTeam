const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
export const watched = getWatchedLocalSotrage() || [];
export const queue = getQueueLocalStoradge() || [];

export function getWatchedLocalSotrage() {
  return JSON.parse(localStorage.getItem(KEY_WATCHED));
}

export function getQueueLocalStoradge() {
  return JSON.parse(localStorage.getItem(KEY_QUEUE));
}

export function setWatchedLocalStorage(arr) {
  localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
}

export function setQueueLocalStorage(arr) {
  localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
}
