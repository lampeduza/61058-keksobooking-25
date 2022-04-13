import {setupMap} from './map.js';
import {PIN_COUNT} from './data.js';
import {getData} from './api.js';

getData((data) => setupMap(data.slice(0, PIN_COUNT)));
