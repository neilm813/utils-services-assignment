# Assignment requirements

In this project we'll fetch users from an api, select a random user from the fetched data, format the user's address
and then log it to the console.

## Part 1

### Setup project

1. [ ] Create a folder for this node.js project and cd into it
1. [ ] Create a this folder and file `src/index.js` which will be the starting point of our app and add `console.log('app started')` to it. The `src` file is where code is written
1. [ ] Initialize npm with `npm init -y` to create a `package.json` so we can install packages
1. [ ] Install packages: `npm install axios nodemon`
1. [ ] Open `package.json` and add to the `"scripts"` section: `"start": nodemon ./src/index.js` (hint: pay attention to where commas are used in this file)
1. [ ] In `package.json` add a new field: `"type": "module"` to enable `import` and `export` syntax (hint: pay attention to where commas are used in this file)
1. [ ] Test start the project to see if the console.log prints: `npm run start` then use ctrl+c to stop it.

### Utility functions for randomness

We want to break the app's requirements down into small pieces (functions) to make it easier to solve.

We need to be able to select a random user from an array. This can be more generic shareable task: get a random item from any array.

This can be broken down into another smaller task: get a random number between two numbers which can be used to select a random index.

1. [ ] Create the following folder and file: `src/utils/random.js`
1. [ ] Create and export a function called `randomIntFromRange` that takes a `min` and a `max` parameter and returns a random number between the `min` (inclusive) and `max` (exclusive). Research with partners and google as needed.
1. [ ] Create `src/utils/index.js` which will organize exporting all our utility functions. Add `export * from './random.js` to it
1. [ ] in `index.js` import and test your utility function by adding `import { randomIntFromRange } from './utils/index.js'` then call the imported function, pass in the required numbers, log the returned random number, and run the project with `npm run start` to see the output.
1. [ ] Back in `src/utils/random.js` create and export a function called `randomItemFromArray` which takes an array as a parameter and uses the `randomIntFromRange` to get a random index and then return the item at that random index.
1. [ ] Back in `src/index.js` import `randomItemFromArray` and test it by calling it, passing in an array you created, and logging the returned value

## Part 2

### Services

Now that we have the util functions we can focus on creating some service functions that provide the service of calling the api to fetch users, then we can use our utility functions to complete the rest of the tasks.

1. [ ] create the folder and file `src/services/dummyJsonApi.js` to provide the service of calling this [api](https://dummyjson.com/), we'll request the [users](https://dummyjson.com/docs/users) resource. Click show output and keep this open, we'll need to know how this data is structured to use it later
1. [ ] In the new file, `import axios from 'axios';`
1. [ ] Create an axios instance that has the base api url saved to it so we don't have to keep repeating it

    - ```js
      const client = axios.create({ baseURL: 'https://dummyjson.com' })
      ```

1. [ ] Create an `async` function called `getUsers` that does `const response = await client.get('/users');` and then returns the axios `response.data`
1. [ ] Create another `async` function called `getRandomUser` which for now just does `const data = await getUsers();` and console logs the data for testing
1. [ ] Create `src/services/index.js` to export our services: `export * from './dummyJsonApi.js';`
1. [ ] In `src/index.js` `import { getRandomUser } from './services/index.js'` and then call the imported function and run the project with `npm run start` to look for the console log to see if it's working.

    - ```js
      try {
        const user = await getRandomUser()
      } catch (error) {
        console.log(error);
      }
      ```

1. [ ] Back in `src/services/dummyJsonApi.js` `import { randomItemFromArray } from '../utils/index.js';` and then inside `getRandomUser` use `randomItemFromArray` on the `data.users` array to `return` the random user
1. [ ] Check the console log again to see if now only one user is being logged
1. [ ] Now for the final piece we need a utility function to help format the address. Create the file `utils/formatters.js` and create a function called `formatAddressUsps` which takes in an address object, recipient name, and company name params. Assume the address object will have keys named like the address object in the user data from the api. This function should return an address formatted according to the [usps standard](https://pe.usps.com/businessmail101?ViewName=DeliveryAddress)
1. [ ] In `utils/index.js` `export * from './formatters.js'`
1. [ ] In `src/index.js` add `formatAddressUsps` to the `utils` import and then call it and pass in the random user's address, full name, and company name and console log the returned formatted address
