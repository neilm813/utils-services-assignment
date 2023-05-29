/* 
This file exports all of the files in the `utils` folder so instead of having to do:
  import { a, b } from 'utils/fileOne.js';
  import { c } from 'utils/fileTwo.js';

You can instead do:
  import { a, b, c } from 'utils/index.js';

Which allows importing anything in the `utils` folder in one import statement and doesn't require referencing multiple
file names inside of 'utils'. If any of the file names change, the `index.js` only needs to be updated.
*/

export * from './random.js';
export * from './formatters.js';
