
import {TYPES} from '../const.js';
import {getRandomValue, getRandomInteger} from '../utils.js';
import { generateOffer } from './offers.js';

export const generatePoint = (index) => (
  {
    id: index + 1,
    basePrice: getRandomInteger(500, 3000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: index + 1,
    offers: Array.from({length: getRandomInteger(1, 5)}, (_value, i) => generateOffer(i)),
    type: getRandomValue(TYPES)
  }
);
