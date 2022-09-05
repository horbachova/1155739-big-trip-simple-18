import { getRandomInteger, getRandomValue } from '../utils.js';
import { TYPES, DESCRIPTIONS } from './const.js';

const generateOffer = (index) => (
  {
    id: index + 1,
    title: getRandomValue(DESCRIPTIONS),
    price: getRandomInteger(50, 1000),
  }
);

export const generateOffersType = (i) => (
  {
    type: TYPES[i],
    offers: Array.from({length: getRandomInteger(1, 5)}, (_value, index) => generateOffer(index))
  }
);

export {generateOffer};

