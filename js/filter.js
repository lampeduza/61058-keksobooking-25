import {forms} from './form.js';

// Форма map filters
const mapFilters = forms[0];

// Нахожу тип жилья, цены, количество комнат, количество гостей
const housingType = mapFilters.querySelector('select[name="housing-type"]');
const housingPrice = mapFilters.querySelector('select[name="housing-price"]');
const housingRooms = mapFilters.querySelector('select[name="housing-rooms"]');
const housingGuests = mapFilters.querySelector('select[name="housing-guests"]');


// По типу
const isSimilarHousingType = (ad) => {
	const adType = ad.offer.type;

	return housingType.value === 'any' ? true : housingType.value === adType;
};

const setHousingType = (cb) => {
	housingType.addEventListener('change', cb);
};


// По количеству комнат
const isSimilarHousingRooms = (ad) => {
	const adRooms = ad.offer.rooms;

	return housingRooms.value === 'any' ? true : parseInt(housingRooms.value, 10) === adRooms;
};

const setHousingRooms = (cb) => {
	housingRooms.addEventListener('change', cb);
};

// По количеству гостей
const isSimilarHousingGuests = (ad) => {
	const adGuests = ad.offer.guests;

	return housingGuests.value === 'any' ? true : parseInt(housingGuests.value, 10) === adGuests;
};

const setHousingGuests = (cb) => {
	housingGuests.addEventListener('change', cb);
};

// По цене
// По количеству комнат
const isSimilarHousingPrice = (ad) => {
	const adPrice = ad.offer.price;
	const minPrice = 10000;
	const maxPrice = 50000;

	if (housingPrice.value === 'any') {
		return true;
	}

	if (housingPrice.value === 'middle') {
		return adPrice >= minPrice && adPrice <= maxPrice;
	}

	if (housingPrice.value === 'low') {
		return adPrice <= minPrice;
	}

	if (housingPrice.value === 'high') {
		return adPrice >= maxPrice;
	}
};

const setHousingPrice = (cb) => {
	housingPrice.addEventListener('change', cb);
};

const compareAds = (ad) => {
	return isSimilarHousingType(ad) && isSimilarHousingRooms(ad) && isSimilarHousingGuests(ad) && isSimilarHousingPrice(ad);
};

export {compareAds, setHousingType, setHousingRooms, setHousingGuests, setHousingPrice};