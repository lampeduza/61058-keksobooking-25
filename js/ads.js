const adTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const addFeatures = (ad, similarAd) => {
  const adFeaturesList = ad.querySelector('.popup__features');
  const featuresListFragment = document.createDocumentFragment();

  while (adFeaturesList.firstChild) {
    adFeaturesList.firstChild.remove();
  }

  if (similarAd.offer.features) {
    for (const feature of similarAd.offer.features) {
      const adFeaturesElement = document.createElement('li');
      adFeaturesElement.classList.add('popup__feature', `popup__feature--${feature}`);
      featuresListFragment.appendChild(adFeaturesElement);
    }

    adFeaturesList.appendChild(featuresListFragment);
  }
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
  const rooms = similarAd.offer.rooms;

  switch (rooms < 20 ? rooms : rooms % 10) {
    case 1:
      return `${rooms} комната`;
    case 2:
    case 3:
    case 4:
      return `${rooms} комнаты`;
    default:
      return `${rooms} комнат`;
  }
};


const getRightGuestsPronunciation = (similarAd) => {
  const guests = similarAd.offer.guests;

  switch (guests) {
    case 0:
      return 'не для гостей';
    case 1:
      return 'для 1 гостя';
    default:
      return `для ${guests} гостей`;
  }
};

const createImages = (ad, similarAd) => {
  const adPhotosList = ad.querySelector('.popup__photos');
  const adPhotosImage = adPhotosList.querySelector('.popup__photo');
  const imagesListFragment = document.createDocumentFragment();

  if (similarAd.offer.photos) {
    for (const photo of similarAd.offer.photos) {
      const clonedImage = adPhotosImage.cloneNode(true);
      clonedImage.src = photo;
      imagesListFragment.appendChild(clonedImage);
    }

    adPhotosList.appendChild(imagesListFragment);
  }

  adPhotosImage.remove();
};

const renderAd = (similarAd) => {
  const adsListFragment = document.createDocumentFragment();
  const ad = adTemplate.cloneNode(true);
  ad.querySelector('.popup__title').textContent = similarAd.offer.title;
  ad.querySelector('.popup__text--address').textContent = similarAd.offer.address;
  ad.querySelector('.popup__text--price').firstChild.textContent = `${similarAd.offer.price} `;
  ad.querySelector('.popup__type').textContent = switchEngToRus(similarAd);
  ad.querySelector('.popup__text--capacity').textContent = `${getRightRoomsPronunciation(similarAd)} ${getRightGuestsPronunciation(similarAd)}`;
  ad.querySelector('.popup__text--time').textContent = `Заезд после ${similarAd.offer.checking} , выезд до ${similarAd.offer.checkout}`;
  ad.querySelector('.popup__description').textContent = similarAd.offer.description;
  ad.querySelector('.popup__avatar').src = similarAd.author.avatar;
  ad.querySelector('.popup__text--price').firstChild.textContent = `${similarAd.offer.price} `;
  addFeatures(ad, similarAd);
  createImages(ad, similarAd);
  return adsListFragment.appendChild(ad);
};

export {renderAd};
