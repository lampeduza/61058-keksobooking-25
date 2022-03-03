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

const getRandomElement = (elements) => elements[getRandomFloat(0, elements.length - 1)];

const shuffleArray = (array, length = array.length) => {
  for (let i = 0; i < length; i++) {
    const index = getRandomFloat(0, array.length - 1);
    const swap = array[i];

    array[i] = array[index];
    array[index] = swap;
  }
};

const getRandomElements = (array) => {
  const clonedArray = array.slice();
  const arrayLength = getRandomFloat(1, clonedArray.length);
  shuffleArray(clonedArray, arrayLength);

  return clonedArray.slice(0, arrayLength);
};

const generateAvatars = () => {
  const array = [];

  for (let i = 0; i < 10; i++) {
    array[i] = i < 9 ? `img/avatars/user0${i + 1}.png` : `img/avatars/user${i + 1}.png`;
  }

  shuffleArray(array);

  return array;
};

const generateAd = (avatar) => {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5)
  };

  return {
    author: {
      avatar: avatar,
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomFloat(30000, 120000),
      type: getRandomElement(TYPES),
      rooms: getRandomFloat(1, 10),
      guests: getRandomFloat(1, 10),
      checking: getRandomElement(TIMES),
      checkout: getRandomElement(TIMES),
      features: getRandomElements(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: getRandomElements(PHOTOS)
    },
    location
  };
};

const objectsArray = [];
const avatarsArray = generateAvatars();
for (let i = 0; i < 10; i++) {
  objectsArray[i] = generateAd(avatarsArray[i]);
}

console.log(objectsArray);
