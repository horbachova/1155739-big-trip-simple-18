import { getRandomInteger, getRandomValue } from '../utils.js';
import { DESCRIPTIONS, NAMES } from './const.js';

const generatePictureAddress = () => (
  {
    src: `http://picsum.photos/300/200?r=${getRandomInteger(1, 10)}`,
    description: getRandomValue(DESCRIPTIONS),
  }
);


export const generateDestination = () => (
  {
    id: 1,
    description: getRandomValue(DESCRIPTIONS),
    name: getRandomValue(NAMES),
    pictures: Array.from({ length: getRandomInteger(0, 3) }, generatePictureAddress)
  });
