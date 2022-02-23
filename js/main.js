// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const generateNumber = (min, max) => Math.random() * (max - min + 1) + min;

const generateError = (min, max) => {
  if (min < 0) {
    throw new RangeError('Неприемлимо отрицательное значение');
  }

  if (max <= min) {
    throw new RangeError('Максимальное значение не должно быть меньше или равно минимальному');
  }
};

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  generateError(min, max);

  return Math.floor(generateNumber(min, max));
};

getRandomInteger(1, 5);

// https://learn.javascript.ru/number
const getRandomFloat = (min, max, amountOfSymbolsAfterComma) => {
  generateError(min, max);

  const random = generateNumber(min, max);
  const randomToString = random.toFixed(amountOfSymbolsAfterComma);
  return +randomToString;
};

getRandomFloat(1, 5, 5);
