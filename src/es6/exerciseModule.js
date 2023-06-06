import getData from './apiModule.js';

function methodName() {
  return getData().then((movies) => movies);
}
