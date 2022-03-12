import {getRandomFloat, getRandomElement, getRandomElements} from './util.js';
import {shuffleArray} from './sort.js';
import {getObjectsArray, TITLES} from './data.js'; // На время импортировал массив TITLES для вызова функций в main.js
import {generateAds} from './ads.js';

getObjectsArray();

// Вызовы функций
// Передал данные (цифры) как моки (несуществующие данные, данные для примера)
getRandomFloat(1, 5, 5);

// Передал массив TITLES
getRandomElement(TITLES);
getRandomElements(TITLES);
shuffleArray(TITLES);


// Вызов ads.js
generateAds();