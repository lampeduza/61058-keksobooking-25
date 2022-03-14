import {getObjects} from './data.js';
import {renderAd} from './ads.js';

const ads = getObjects();

renderAd(ads[0]);
