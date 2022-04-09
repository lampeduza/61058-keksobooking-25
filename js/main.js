import {setupMap} from './map.js';
// import {ads} from './data.js';
import {getData} from './api.js';

// setupMap(ads);

getData((data) => setupMap(data));