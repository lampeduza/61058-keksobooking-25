import {getObjects} from './data.js';
import {renderAd} from './ads.js';
import {disableInterface, enableInterface} from './form.js';

import {adForm, pristine} from './validation.js';

const ads = getObjects();

renderAd(ads[0]);

disableInterface();
enableInterface();
