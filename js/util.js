import {shuffleArray} from './sort.js';
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

const checkArguments = (min, max) => {
  if (min < 0) {
    throw new RangeError('Неприемлимо отрицательное значение');
  }

  if (max <= min) {
    throw new RangeError('Максимальное значение не должно быть меньше или равно минимальному');
  }
};

const numberToFixed = (number, digits) => +number.toFixed(digits);

// getRandomFloat is defined but never used
const getRandomFloat = (min, max, digits = 0) => {
  min = numberToFixed(min, digits);
  max = numberToFixed(max, digits);

  checkArguments(min, max);

  const randomNumber = Math.random() * (max - min) + min;
  return numberToFixed(randomNumber, digits);
};

// getRandomElement is defined but never used
const getRandomElement = (elements) => elements[getRandomFloat(0, elements.length - 1)];

// getRandomElements is defined but never used
const getRandomElements = (array) => {
  const clonedArray = array.slice();
  const arrayLength = getRandomFloat(1, clonedArray.length);
  shuffleArray(clonedArray, arrayLength);

  return clonedArray.slice(0, arrayLength);
};

export {getRandomFloat, getRandomElement, getRandomElements};
