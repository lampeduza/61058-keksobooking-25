import {setupMap, renderAds} from './map.js';
import {getData} from './api.js';
import {setHousingType, setHousingRooms, setHousingGuests, setHousingPrice, setHousingFeatures} from './filter.js';
import {chooseAvatar, chooseApartmentPhoto} from './avatar.js';

setupMap();

getData((data) => {
	console.log(data);
	renderAds(data);
	setHousingType(() => renderAds(data));
	setHousingRooms(() => renderAds(data));
	setHousingGuests(() => renderAds(data));
	setHousingPrice(() => renderAds(data));
	setHousingFeatures(() => renderAds(data));
});
chooseAvatar();
chooseApartmentPhoto();
