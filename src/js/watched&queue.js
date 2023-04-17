import {
  watched,
  queue,
  setWatchedLocalStorage,
  setQueueLocalStorage,
} from './localStorage';

export function onAddToWatched(id) {
  if (watched.includes(id)) {
    return;
  }
  watched.push(id);
  setWatchedLocalStorage(watched);
}

export function onAddToQueue(id) {
  if (queue.includes(id)) {
    return;
  }
  queue.push(id);
  setQueueLocalStorage(queue);
}
