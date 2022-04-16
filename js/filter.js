const mapFilters = document.querySelector('.map__filters');

const housingType = mapFilters.querySelector('select[name="housing-type"]');
const housingPrice = mapFilters.querySelector('select[name="housing-price"]');
const housingRooms = mapFilters.querySelector('select[name="housing-rooms"]');
const housingGuests = mapFilters.querySelector('select[name="housing-guests"]');
const featuresContainer = mapFilters.querySelector('#housing-features');

const isSimilarHousingType = (ad) => {
	const adType = ad.offer.type;

	return housingType.value === 'any' ? true : housingType.value === adType;
};

const addTypeChangeHandler = (cb) => {
	housingType.addEventListener('change', cb);
};

const isSimilarHousingRooms = (ad) => {
	const adRooms = ad.offer.rooms;

	return housingRooms.value === 'any' ? true : parseInt(housingRooms.value, 10) === adRooms;
};

const addRoomsChangeHandler = (cb) => {
	housingRooms.addEventListener('change', cb);
};

const isSimilarHousingGuests = (ad) => {
	const adGuests = ad.offer.guests;

	return housingGuests.value === 'any' ? true : parseInt(housingGuests.value, 10) === adGuests;
};

const addGuestsChangeHandler = (cb) => {
	housingGuests.addEventListener('change', cb);
};

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

const addPriceChangeHandler = (cb) => {
	housingPrice.addEventListener('change', cb);
};

const isSimilarFeatures = (ad) => {
	const adFeatures = ad.offer.features;
	const chosenFeatures = featuresContainer.querySelectorAll('input[type="checkbox"]:checked');
	let flag = true;

	if (chosenFeatures.length) {
		if (!adFeatures || !adFeatures.length) {
			return false;
		}

		let i = 0;

		while (flag && i < chosenFeatures.length) {
			const chosenFeature = chosenFeatures[i].value;
			const isContains = adFeatures.includes(chosenFeature);

			i++;

			if (!isContains) {
				flag = false;
			}
		}
	}

	return flag;
};

const addFeaturesChangeHandler = (cb) => {
	const features = featuresContainer.children;

	for (let feature of features) {
		feature.addEventListener('click', cb);
	}
};

const compareAds = (ad) => {
	return isSimilarHousingType(ad) && isSimilarHousingRooms(ad) && isSimilarHousingGuests(ad) && isSimilarHousingPrice(ad) && isSimilarFeatures(ad);
};

export {compareAds, addTypeChangeHandler, addRoomsChangeHandler, addGuestsChangeHandler, addPriceChangeHandler, addFeaturesChangeHandler};
