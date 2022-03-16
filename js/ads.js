const map = document.querySelector('.map');

const adsList = map.querySelector('.map__canvas');

const adTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const addFeatures = (ad, similarAd) => {
  const adFeaturesList = ad.querySelector('.popup__features');

  const featuresListFragment = document.createDocumentFragment();

  while (adFeaturesList.firstChild) {
    adFeaturesList.firstChild.remove();
  }

  for (const feature of similarAd.offer.features) {
    const adFeaturesElement = document.createElement('li');
    adFeaturesElement.classList.add('popup__feature', `popup__feature--${feature}`);
    const clonedElement = adFeaturesElement.cloneNode(true);
    featuresListFragment.appendChild(clonedElement);
  }

  adFeaturesList.appendChild(featuresListFragment);
};

const switchEngToRus = (similarAd) => {
  const russianDictionary = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalow: 'Бунгало',
    hotel: 'Отель'
  };

  return russianDictionary[similarAd.offer.type];
};

const getRightRoomsPronunciation = (similarAd) => {
  if (similarAd.offer.rooms === 1) {
    return 'комната';
  } else if (similarAd.offer.rooms <= 4) {
    return 'комнаты';
  } else {
    return 'комнат';
  }
};

const getRightGuestsPronunciation = (similarAd) => {
  if (similarAd.offer.guests === 1) {
    return 'гостя';
  } else if (similarAd.offer.guests > 1) {
    return 'гостей';
  }
};

const createImages = (ad, similarAd) => {
  const adPhotosList = ad.querySelector('.popup__photos');
  const adPhotosImage = adPhotosList.querySelector('.popup__photo');

  const imagesListFragment = document.createDocumentFragment();

  for (const photo of similarAd.offer.photos) {
    const clonedImage = adPhotosImage.cloneNode(true);
    clonedImage.src = photo;
    imagesListFragment.appendChild(clonedImage);
  }

  adPhotosImage.remove();
  adPhotosList.appendChild(imagesListFragment);
};

const renderAd = (similarAd) => {
  const adsListFragment = document.createDocumentFragment();

  const ad = adTemplate.cloneNode(true);
  ad.querySelector('.popup__title').textContent = similarAd.offer.title;
  ad.querySelector('.popup__text--address').textContent = similarAd.offer.address;
  ad.querySelector('.popup__text--price').firstChild.textContent = `${similarAd.offer.price} `;
  ad.querySelector('.popup__type').textContent = switchEngToRus(similarAd);
  ad.querySelector('.popup__text--capacity').textContent = `${similarAd.offer.rooms}  ${getRightRoomsPronunciation(similarAd)} для ${similarAd.offer.guests} ${getRightGuestsPronunciation(similarAd)}`;
  ad.querySelector('.popup__text--time').textContent = `Заезд после ${similarAd.offer.checking} , выезд до ${similarAd.offer.checkout}`;
  ad.querySelector('.popup__description').textContent = similarAd.offer.description;
  ad.querySelector('.popup__avatar').src = similarAd.author.avatar;
  addFeatures(ad, similarAd);
  createImages(ad, similarAd);
  adsListFragment.appendChild(ad);

  const price = ad.querySelector('.popup__text--price');
  price.textContent = `${similarAd.offer.price}`;
  const currency = document.createElement('span');
  currency.textContent = ' ₽/ночь';
  price.appendChild(currency);

  ad.querySelector('.popup__type').textContent = switchEngToRus(similarAd);
  ad.querySelector('.popup__text--capacity').textContent = `${similarAd.offer.rooms}  ${getRightRoomsPronunciation(similarAd)} для ${similarAd.offer.guests} ${getRightGuestsPronunciation(similarAd)}`;
  ad.querySelector('.popup__text--time').textContent = `Заезд после ${similarAd.offer.checking} , выезд до ${similarAd.offer.checkout}`;
  ad.querySelector('.popup__description').textContent = similarAd.offer.description;
  ad.querySelector('.popup__avatar').src = similarAd.author.avatar;
  addFeatures(ad, similarAd);
  createImages(ad, similarAd);
  adsListFragment.appendChild(ad);

  adsList.appendChild(adsListFragment);
};

export {renderAd};
