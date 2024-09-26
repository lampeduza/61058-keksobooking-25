import {setupMap, renderAds} from './map.js';
import {getData} from './api.js';
import {addTypeChangeHandler, addRoomsChangeHandler, addGuestsChangeHandler, addPriceChangeHandler, addFeaturesChangeHandler} from './filter.js';
import {setupAvatarChooser, setupApartmentPhoto, previewArea, apartmentImage} from './avatar.js';
import {RERENDER_DELAY} from './data.js';
import {debounce} from './util.js';
import {addAdFormSubmitHandler, addResetButtonClickHandler} from './validation.js';
setupMap();

getData((data) => {
  renderAds(data);
  addTypeChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
  addRoomsChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
  addGuestsChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
  addPriceChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
  addFeaturesChangeHandler(debounce(() => renderAds(data), RERENDER_DELAY));
  addAdFormSubmitHandler(debounce(() => {
    renderAds(data);
    previewArea.src = 'img/muffin-grey.svg';
    apartmentImage.removeAttribute('src');
    apartmentImage.removeAttribute('alt');
  }, RERENDER_DELAY));
  addResetButtonClickHandler(debounce(() => {
    renderAds(data);
    previewArea.src = 'img/muffin-grey.svg';
    apartmentImage.removeAttribute('src');
    apartmentImage.removeAttribute('alt');
  }, RERENDER_DELAY));
});
setupAvatarChooser();
setupApartmentPhoto();
