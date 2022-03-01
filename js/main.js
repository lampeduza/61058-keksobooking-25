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

  const randomNumber = Math.random() * (max - min) + min;
  return numberToFixed(randomNumber, digits);
};

/*
  Генерация данных
*/
const TITLES = [
  'Сдам уютную студию!',
  '5 минут пешком до метро!',
  'Топ предложение в районе!',
  'Успейте снять по старой цене!',
  'Окна на парк!',
  'Жк бизнес класса!',
  'Без комиссии!',
  'Заезжай и живи!'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'Квартира супер атмосферная, подойдет для парочки',
  'Квартира уютная, чистая и просторная',
  'Есть все необходимое для комфортного проживания',
  'В подъезде имеется консьерж. Ведётся видеонаблюдение'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomArrayElement = (elements) => elements[getRandomFloat(0, elements.length - 1)];

const shuffleArray = (array) => {
  for (let i = 0; i <= array.length - 1; i++) {
    const index = getRandomFloat(0, array.length - 1);
    const swap = array[i];

    array[i] = array[index];
    array[index] = swap;
  }

  return array;
};

// Не получается сгенерировать уникальный элемент для каждого аватара
const generateAvatar = () => {
  const array = [];

  for (let i = 0; i < 10; i++) {
    array[i] = i < 9 ? 'img/avatars/user0' + (i + 1) + '.png' : 'img/avatars/user' + (i + 1) + '.png';
  }

  return shuffleArray(array);
};

const getMultipleStringsArray = (array) => {
  let clonedArray = array.slice();

  shuffleArray(clonedArray);

  const arrayLength = getRandomFloat(1, clonedArray.length);

  return clonedArray = clonedArray.slice(0, arrayLength);
};

const generateAd = (avatar) => {
  const locationData = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5)
  };

  return {
    author: {
      avatar: 1,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: locationData.x + ', ' + locationData.y,
      price: getRandomFloat(30000, 120000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomFloat(1, 10),
      guests: getRandomFloat(1, 10),
      checking: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getMultipleStringsArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getMultipleStringsArray(PHOTOS)
    },
    location: {
      lat: locationData.x,
      lng: locationData.y
    }
  };
};

const objectsArray = [];
for (let i = 0; i < 10; i++) {
  objectsArray[i] = generateAd();
}

console.log(objectsArray);
