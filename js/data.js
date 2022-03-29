import {shuffleArray} from './sort.js';
import {getRandomFloat, getRandomElement, getRandomElements} from './util.js';

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

const getObjects = () => {
  const objects = [];
  const avatarsArray = generateAvatars();

  for (let i = 0; i < 10; i++) {
    objects[i] = generateAd(avatarsArray[i]);
  }

  return objects;
};

const ads = getObjects();

export {ads};
