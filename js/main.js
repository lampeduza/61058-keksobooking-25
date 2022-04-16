import {setupMap, renderAds} from './map.js';
import {getData} from './api.js';
import {addTypeChangeHandler, addRoomsChangeHandler, addGuestsChangeHandler, addPriceChangeHandler, addFeaturesChangeHandler} from './filter.js';
import {setupAvatarChooser, chooseApartmentPhoto} from './avatar.js';
import {RERENDER_DELAY} from './data.js';
import {debounce} from './util.js';

setupMap();

getData((data) => {
	console.log(data);
	renderAds(data);
	addTypeChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
	addRoomsChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
	addGuestsChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
	addPriceChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
	addFeaturesChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
});
setupAvatarChooser();
chooseApartmentPhoto();
