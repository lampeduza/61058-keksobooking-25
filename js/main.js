import {setupMap, renderAds} from './map.js';
import {getData} from './api.js';
import {setHousingType, setHousingRooms, setHousingGuests, setHousingPrice, setHousingFeatures} from './filter.js';
import {chooseAvatar, chooseApartmentPhoto} from './avatar.js';
import {RERENDER_DELAY} from './data.js';
import {debounce} from './util.js';

setupMap();

getData((data) => {
	console.log(data);
	renderAds(data);
	setHousingType(debounce(() => renderAds(data), RERENDER_DELAY));
	setHousingRooms(debounce(() => renderAds(data), RERENDER_DELAY));
	setHousingGuests(debounce(() => renderAds(data), RERENDER_DELAY));
	setHousingPrice(debounce(() => renderAds(data), RERENDER_DELAY));
	setHousingFeatures(debounce(() => renderAds(data), RERENDER_DELAY));
});
chooseAvatar();
chooseApartmentPhoto();
