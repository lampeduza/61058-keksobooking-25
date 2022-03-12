import {getObjectsArray} from './data.js';

// Нашел блок с картой
const map = document.querySelector('.map');

// Нашел блок для вставки объявлений
const adsList = map.querySelector('.map__canvas');

// Нашел шаблон объявления
const adTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAds = getObjectsArray();

// Создал document fragment
const documentFragment = document.createDocumentFragment();

const generateAds = () => {
  const ad = adTemplate.cloneNode(true);

  //for (let i = 0; i <= similarAds.length - 1; i++) {
  for (let similarAd of similarAds) {

    // Понять, как вынести эту функцию в глобальную область видимости
    const switchEngToRus = () => {
      if (similarAd.offer.type === 'palace') {
        return 'Дворец';
      } else if (similarAd.offer.type === 'flat') {
        return 'Квартира';
      } else if (similarAd.offer.type === 'house') {
        return 'Дом';
      } else if (similarAd.offer.type === 'bungalow') {
        return 'Бунгало';
      } else {
        return 'Отель';
      }
    };

    // Понять, как вынести эту функцию в глобальную область видимости
    const getRightRoomsPronunciation = () => {
      if (similarAd.offer.rooms === 1) {
        return 'комната';
      } else if (similarAd.offer.rooms <= 4) {
        return 'комнаты';
      } else {
        return 'комнат';
      }
    };

    // Понять, как вынести эту функцию в глобальную область видимости
    const getRightGuestsPronunciation = () => {
      if (similarAd.offer.guests === 1) {
        return 'гостя';
      } else if (similarAd.offer.guests > 1) {
        return 'гостей';
      }
    };

    // Понять, как вынести эту функцию в глобальную область видимости
    const adFeatures = () => {
      const adFeaturesList = ad.querySelector('.popup__features');

      // Удаляю элементы списка
      for (let i = adFeaturesList.children.length - 1; i >= 0; i--) {
        const child = adFeaturesList.children[i];
        child.parentElement.removeChild(child);
      }

      for (let j = 0; j <= similarAd.offer.features.length - 1; j++) {
        const adFeaturesElement = document.createElement('li');
        adFeaturesElement.classList.add('popup__feature', `popup__feature--${similarAd.offer.features[j]}`);
        const clonedElement = adFeaturesElement.cloneNode(true);
        adFeaturesList.appendChild(clonedElement);
      }
    };

    // Понять, как вынести эту функцию в глобальную область видимости
    const createImages = () => {
      const adPhotosList = ad.querySelector('.popup__photos');
      const adPhotosImage = adPhotosList.querySelector('.popup__photo');

      for (let j = 0; j <= similarAd.offer.photos.length - 1; j++) {
        const clonedImage = adPhotosImage.cloneNode(true);
        clonedImage.src = similarAd.offer.photos[j];
        adPhotosList.appendChild(clonedImage);
      }

      adPhotosImage.remove();
    };

    ad.querySelector('.popup__title').textContent = similarAd.offer.title;
    ad.querySelector('.popup__text--address').textContent = similarAd.offer.address;
    ad.querySelector('.popup__text--price').innerHTML = `${similarAd.offer.price} <span>₽/ночь</span>`;
    ad.querySelector('.popup__type').textContent = switchEngToRus();
    ad.querySelector('.popup__text--capacity').textContent = `${similarAd.offer.rooms}  ${getRightRoomsPronunciation()} для ${similarAd.offer.guests} ${getRightGuestsPronunciation()}`;
    ad.querySelector('.popup__text--time').textContent = `Заезд после ${similarAd.offer.checking} , выезд до ${similarAd.offer.checkout}`;
    ad.querySelector('.popup__description').textContent = similarAd.offer.description;
    ad.querySelector('.popup__avatar').src = similarAd.author.avatar;
    adFeatures();
    createImages();
  }

  adsList.appendChild(ad);
  return adsList;
};

export {generateAds};
