// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

const checkArguments = (min, max) => {
  if (min < 0) {
    throw new RangeError('Неприемлимо отрицательное значение');
  }

  if (max <= min) {
    throw new RangeError('Максимальное значение не должно быть меньше или равно минимальному');
  }

  return Math.random() * (max - min + 1) + min;
};


const generateRandomNumber = (min, max, amountOfSymbolsAfterComma) => {
  if (!amountOfSymbolsAfterComma) {
    min = Math.ceil(min);
    max = Math.floor(max);
  }

  const random = checkArguments(min, max, amountOfSymbolsAfterComma);
  const randomToString = random.toFixed(amountOfSymbolsAfterComma);

  return +randomToString;
};

generateRandomNumber(1, 5);
generateRandomNumber(1, 5, 5);
