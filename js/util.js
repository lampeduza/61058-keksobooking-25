import {shuffleArray} from './sort.js';

const checkArguments = (min, max) => {
  if (min < 0) {
    throw new RangeError('Неприемлимо отрицательное значение');
  }

  if (max <= min) {
    throw new RangeError('Максимальное значение не должно быть меньше или равно минимальному');
  }
};

const numberToFixed = (number, digits) => +number.toFixed(digits);

const getRandomFloat = (min, max, digits = 0) => {
  min = numberToFixed(min, digits);
  max = numberToFixed(max, digits);

  checkArguments(min, max);

  const randomNumber = Math.random() * (max - min) + min;
  return numberToFixed(randomNumber, digits);
};

const getRandomElement = (elements) => elements[getRandomFloat(0, elements.length - 1)];

const getRandomElements = (array) => {
  const clonedArray = array.slice();
  const arrayLength = getRandomFloat(1, clonedArray.length);
  shuffleArray(clonedArray, arrayLength);

  return clonedArray.slice(0, arrayLength);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomFloat, getRandomElement, getRandomElements, isEscapeKey, debounce};
