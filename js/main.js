// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    return 'Неприемлимо отрицательное значение';
  }

  if (max <= min) {
    return 'Максимальное значение не должно быть меньше или равно минимальному';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInteger(1, 5);

// https://learn.javascript.ru/number
const getRandomFloat = (min, max, amountOfSymbolsAfterComma) => {

  if (min < 0) {
    return 'Неприемлимо отрицательное значение';
  }

  if (max <= min) {
    return 'Максимальное значение не должно быть меньше или равно минимальному';
  }

  const random = Math.random() * (max - min) + min;
  const randomToString = random.toFixed(amountOfSymbolsAfterComma);
  return +randomToString;
};

getRandomFloat(1, 5, 5);
