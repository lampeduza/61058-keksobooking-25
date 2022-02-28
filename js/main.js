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
  'Топ предложение в район!е',
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

const getRandomArrayElement = (arrayElements) => arrayElements[getRandomFloat(0, arrayElements.length - 1)];

const generateAd = () => {
  const locations = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5)
  };

  return {
    author: {
      avatar: 1
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: locations.x + ' ' + locations.y,
      price: getRandomFloat(30000, 120000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomFloat(1, 10),
      guests: getRandomFloat(1, 10),
      checking: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: FEATURES, // ['array', 'of', 'strings']
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: PHOTOS, // ['array', 'of', 'strings']
    },
    location: {
      lat: locations.x,
      lng: locations.y
    }
  };
};

console.log(generateAd());
