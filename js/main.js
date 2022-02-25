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

const getRandomFloat = (min, max, digits = 0) => {
  min = numberToFixed(min, digits);
  max = numberToFixed(max, digits);

  checkArguments(min, max);

  const randomNumber = Math.random() * (max - min + 1) + min;
  return numberToFixed(randomNumber, digits);
};

getRandomFloat(1, 5, 5);
