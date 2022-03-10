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

// Функция для генерации похожих объявлений
const generateAds = () => {
	const ad = adTemplate.cloneNode(true);

	for (let i = 0; i <= similarAds.length - 1; i++) {
		const adTitle = ad.querySelector('.popup__title').textContent = similarAds[i].offer.title;
		const adAddress = ad.querySelector('.popup__text--address').textContent = similarAds[i].offer.address;

		// Подумать над другим решением, чтобы не перезаписывать <span></span>
		const adPrice = ad.querySelector('.popup__text--price').innerHTML = similarAds[i].offer.price + ' <span>₽/ночь</span>';

		// !!!!! Придумать функцию, которая будет подставлять русский вариант вместо английского
		const adType = ad.querySelector('.popup__type');
		console.log(adType);

		// Подумать над функцией, которая будет правильно склонять
		const adCapacity = ad.querySelector('.popup__text--capacity').textContent = similarAds[i].offer.rooms + ' комнаты для ' + similarAds[i].offer.guests + ' гостей';

		const adTime = ad.querySelector('.popup__text--time').textContent = 'Заезд после ' + similarAds[i].offer.checking + ', выезд до ' + similarAds[i].offer.checkout;

		// Наверное, нужна отдельная функция? Сделать так, чтобы генерировалось сразу несколько features, но как?
		const adFeaturesList = ad.querySelector('.popup__features');
		adFeaturesList.innerHTML = '';
		const featureElement = document.createElement('li');
		featureElement.classList.add('popup__feature', 'popup__feature--' + similarAds[i].offer.features[i]);
		adFeaturesList.appendChild(featureElement);

		const adDescription = ad.querySelector('.popup__description').textContent = similarAds[i].offer.description;

		// Подумать над отдельной функцией, которая будет создавать и вставлять изображения в контейнер на подобие features
		const adPhotosList = ad.querySelector('.popup__photos');
		adPhotosList.innerHTML = '';
		const adPhotosElement = document.createElement('img');
		adPhotosElement.classList.add('popup__photo');
		adPhotosElement.width = 45;
		adPhotosElement.height = 40;
		adPhotosElement.alt = 'Фотография жилья';
		adPhotosElement.src = similarAds[i].offer.photos[i];
		adPhotosList.appendChild(adPhotosElement);

		const adAvatar = ad.querySelector('.popup__avatar').src = similarAds[i].author.avatar;

	}

	adsList.appendChild(ad);
	return adsList;
};

generateAds();

export {generateAds};
