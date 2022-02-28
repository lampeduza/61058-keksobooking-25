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

// FEATURES НУЖНО КАК ТО ЗАПИСЫВАТЬ В НОВЫЙ МАССИВ, БЕЗ ПОВТОРЕНИЙ, НЕ ПОНИМАЮ, КАК.
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

// PHOTOS - ТОЖЕ САМОЕ, НУЖНО ЗАПИСЫВАТЬ В НОВЫЙ МАССИВ
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// Не понимаю вот эту функцию до конца. То ли параметр глупый, то ли я бы сменил параметр на параметр типа array.
// array => array[getRandomFloat(0, array.length - 1)]; - так кажется очевиднее. В демонстрации написано elements, why?
const getRandomArrayElement = (elements) => elements[getRandomFloat(0, elements.length - 1)];

// generateAvatar (получилось странное решение, но эта функция хотя бы генерирует правильно элементы массива
// не понимаю, как доработать до такого состояния, когда в возвращаемом объекте будут пути, которые не будут повторяться.
const generateAvatar = () => {
  const array = [];
  let path = '';

  for (let i = 1; i <= 10; i++) {
    i < 10 ? path = 'img/avatars/user0' + i + '.png' : path = 'img/avatars/user' + i + '.png';
    array[i - 1] = path;
  }

  return getRandomArrayElement(array);
};

const generateAd = () => {
  // Как обойтись без этого объекта? А только передавать location.lat and location.lng. Наверное это области видимости..
  const locationData = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5)
  };

  return {
    author: {
      avatar: generateAvatar(),
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
      features: FEATURES, // ['array', 'of', 'strings']
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: PHOTOS, // ['array', 'of', 'strings']
    },
    // в location.lat and location.lng вызывал функцию getRandomFloat().
    // Вроде все работает, но, когда в address передаю location.lat and location.lng - выводится undefine? Это области видимости?
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
