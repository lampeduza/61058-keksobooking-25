// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInteger = (minimalInteger, maximalInteger) => {
  minimalInteger = Math.ceil(minimalInteger);
  maximalInteger = Math.floor(maximalInteger);

  if (minimalInteger < 0) {
    return 'Неприемлимо отрицательное значение';
  }

  if (maximalInteger <= minimalInteger) {
    return 'Максимальное значение не должно быть меньше или быть равно минимальному значению';
  }

  return Math.floor(Math.random() * (maximalInteger - minimalInteger + 1)) + minimalInteger;

  /*
  // На доработку (в будущем)
  // Избавиться от ошибки "Do not nest ternary expressions no-nested-ternary", попытаться в одну строку
  return minimalInteger < 0 ? 'Неприемлимо отрицательное значение' :
    maximalInteger <= minimalInteger ? 'Максимальное значение не должно быть меньше или быть равно минимальному значению' :
      Math.floor(Math.random() * (maximalInteger - minimalInteger + 1)) + minimalInteger;
  */
};

getRandomInteger(1, 5);
