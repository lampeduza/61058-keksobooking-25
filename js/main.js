import {setupMap} from './map.js';
import {PIN_COUNT} from './data.js';
import {getData} from './api.js';
import {chooseAvatar, chooseApartmentPhoto} from './avatar.js';

getData((data) => setupMap(data.slice(0, PIN_COUNT)));
chooseAvatar();
chooseApartmentPhoto();