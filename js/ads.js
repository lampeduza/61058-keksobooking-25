import {getObjectsArray, TYPES} from './data.js';

// Нашел блок с картой
const map = document.querySelector('.map');

// Нашел блок для вставки объявлений
const adsList = map.querySelector('.map__canvas');

// Нашел шаблон объявления
const adTemplate = document.querySelector('#card')
	.content
	.querySelector('.popup');

const similarAds = getObjectsArray();
console.log(similarAds);

// Создал document fragment
const documentFragment = document.createDocumentFragment();


const generateAds = () => {
	const ad = adTemplate.cloneNode(true);

	for (let i = 0; i <= similarAds.length - 1; i++) {

		// Понять, как вынести эту функцию в глобальную область видимости
		const switchEngToRus = (array) => {
    	if (similarAds[i].offer.type === 'palace') {
      	return 'Дворец';
    	} else if (similarAds[i].offer.type === 'flat') {
      	return 'Квартира';
    	} else if (similarAds[i].offer.type === 'house') {
      	return 'Дом';
    	} else if (similarAds[i].offer.type === 'bungalow') {
      	return 'Бунгало';
    	} else {
     		return 'Отель';
    	}
		};

		// Понять, как вынести эту функцию в глобальную область видимости
		const getRightRoomsPronunciation = () => {
    	if (similarAds[i].offer.rooms === 1) {
    		return 'комната';
    	} else if (similarAds[i].offer.rooms <= 4) {
    		return 'комнаты';
    	} else {
    		return 'комнат';
    	}
		};

		// Понять, как вынести эту функцию в глобальную область видимости
		const getRightGuestsPronunciation = () => {
    	if (similarAds[i].offer.guests === 1) {
    		return 'гостя';
    	} else if (similarAds[i].offer.guests > 1) {
    		return 'гостей';
    	}
		};

		const adTitle = ad.querySelector('.popup__title').textContent = similarAds[i].offer.title;
		const adAddress = ad.querySelector('.popup__text--address').textContent = similarAds[i].offer.address;
		const adPrice = ad.querySelector('.popup__text--price').innerHTML = similarAds[i].offer.price + ' <span>₽/ночь</span>';
		const adType = ad.querySelector('.popup__type').textContent = switchEngToRus(TYPES);
		const adCapacity = ad.querySelector('.popup__text--capacity').textContent = similarAds[i].offer.rooms + ' ' +  getRightRoomsPronunciation() + ' для ' + similarAds[i].offer.guests + ' ' + getRightGuestsPronunciation();
		const adTime = ad.querySelector('.popup__text--time').textContent = 'Заезд после ' + similarAds[i].offer.checking + ', выезд до ' + similarAds[i].offer.checkout;
		const adDescription = ad.querySelector('.popup__description').textContent = similarAds[i].offer.description;
		const adAvatar = ad.querySelector('.popup__avatar').src = similarAds[i].author.avatar;

		// Нужно как - то сгенерировать рандомное количество элементов списка
		// Понять, как вынести эту функцию в глобальную область видимости
		const adFeatures = () => {
			const adFeaturesList = ad.querySelector('.popup__features');

			// Удаляю элементы списка
			for (let i = adFeaturesList.children.length - 1; i >= 0; i--) {
				const child = adFeaturesList.children[i];
				child.parentElement.removeChild(child);
			}

			for (let j = 0; j <= similarAds[i].offer.features.length - 1; j++) {
				const adFeaturesElement = document.createElement('li');
				adFeaturesElement.classList.add('popup__feature', 'popup__feature--' + similarAds[i].offer.features[j]);
				const clonedElement = adFeaturesElement.cloneNode(true);
				adFeaturesList.appendChild(clonedElement);
			}
		};

		adFeatures();

		const createImages = () => {
			const adPhotosList = ad.querySelector('.popup__photos');
			const adPhotosImage = adPhotosList.querySelector('.popup__photo');
			const clonedImage = adPhotosImage.cloneNode(true);
			adPhotosImage.remove();

			for (let j = 0; j <= similarAds[i].offer.photos.length - 1; j++) {
				const clonedImage = adPhotosImage.cloneNode(true);
				clonedImage.src = similarAds[i].offer.photos[j];
				adPhotosList.appendChild(clonedImage);
			}

			adPhotosImage.remove();
		};

		createImages();

	}

	adsList.appendChild(ad);
	return adsList;
};

generateAds();

export {generateAds};
