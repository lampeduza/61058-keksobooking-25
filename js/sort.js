import {getRandomFloat} from './util.js';

// shuffle array is defined but never used
const shuffleArray = (array, length = array.length) => {
  for (let i = 0; i < length; i++) {
    const index = getRandomFloat(0, array.length - 1);
    const swap = array[i];

    array[i] = array[index];
    array[index] = swap;
  }
};

export {shuffleArray};
