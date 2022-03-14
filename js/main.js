import {getObjects} from './data.js';
import {renderAd} from './ads.js';
import {disableInterface, enableInterface} from './form.js';

const ads = getObjects();

renderAd(ads[0]);

disableInterface();
enableInterface();
