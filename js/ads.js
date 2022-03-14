import {getObjects} from './data.js';

const map = document.querySelector('.map');
const adsList = map.querySelector('.map__canvas');
const adTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const similarAds = getObjects();

const featuresListFragment = document.createDocumentFragment();

const addFeatures = (ad, similarAd) => {
  const adFeaturesList = ad.querySelector('.popup__features');

  while (adFeaturesList.firstChild) {
    adFeaturesList.firstChild.remove();
  }

  for (let j = 0; j <= similarAd.offer.features.length - 1; j++) {
    const adFeaturesElement = document.createElement('li');
    adFeaturesElement.classList.add('popup__feature', `popup__feature--${similarAd.offer.features[j]}`);
    const clonedElement = adFeaturesElement.cloneNode(true);
    featuresListFragment.appendChild(clonedElement);
  }

  adFeaturesList.appendChild(featuresListFragment);
};

const switchEngToRus = (ad, similarAd) => {
  const russianDictionary = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalow: 'Бунгало',
    hotel: 'Отель'
  };

  return russianDictionary[similarAd.offer.type];
};

const getRightRoomsPronunciation = (ad, similarAd) => {
  if (similarAd.offer.rooms === 1) {
    return 'комната';
  } else if (similarAd.offer.rooms <= 4) {
    return 'комнаты';
  } else {
    return 'комнат';
  }
};

const getRightGuestsPronunciation = (ad, similarAd) => {
  if (similarAd.offer.guests === 1) {
    return 'гостя';
  } else if (similarAd.offer.guests > 1) {
    return 'гостей';
  }
};

const imagesListFragment = document.createDocumentFragment();

const createImages = (ad, similarAd) => {
  const adPhotosList = ad.querySelector('.popup__photos');
  const adPhotosImage = adPhotosList.querySelector('.popup__photo');

  for (let j = 0; j <= similarAd.offer.photos.length - 1; j++) {
    const clonedImage = adPhotosImage.cloneNode(true);
    clonedImage.src = similarAd.offer.photos[j];
    imagesListFragment.appendChild(clonedImage);
  }

  adPhotosImage.remove();
  adPhotosList.appendChild(imagesListFragment);
};

const adsListFragment = document.createDocumentFragment();

const generateAds = () => {
  const ad = adTemplate.cloneNode(true);

  for (const similarAd of similarAds) {
    ad.querySelector('.popup__title').textContent = similarAd.offer.title;
    ad.querySelector('.popup__text--address').textContent = similarAd.offer.address;
    ad.querySelector('.popup__text--price').innerHTML = `${similarAd.offer.price} <span>₽/ночь</span>`;
    ad.querySelector('.popup__type').textContent = switchEngToRus(ad, similarAd);
    ad.querySelector('.popup__text--capacity').textContent = `${similarAd.offer.rooms}  ${getRightRoomsPronunciation(ad, similarAd)} для ${similarAd.offer.guests} ${getRightGuestsPronunciation(ad, similarAd)}`;
    ad.querySelector('.popup__text--time').textContent = `Заезд после ${similarAd.offer.checking} , выезд до ${similarAd.offer.checkout}`;
    ad.querySelector('.popup__description').textContent = similarAd.offer.description;
    ad.querySelector('.popup__avatar').src = similarAd.author.avatar;
    addFeatures(ad, similarAd);
    createImages(ad, similarAd);
  }

  adsListFragment.appendChild(ad);
  adsList.appendChild(adsListFragment);
};

export {generateAds};
