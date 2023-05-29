/**
 * Gets a random number between a min (inclusive) and a max (exclusive);
 */
export const randomIntFromRange = (min = 0, max = 2) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;
};

export const randomItemFromArray = (items = []) => {
  const randomIndex = randomIntFromRange(0, items.length);
  return items[randomIndex];
};
