import axios from 'axios';
import { randomItemFromArray } from '../utils/index.js';

const client = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const getUsers = async () => {
  const response = await client.get('/users');
  return response.data;
};

// If the api has an endpoint to get a random user we should use that instead, but here we are practicing using
// utility functions to achieve this task
export const getRandomUser = async () => {
  const data = await getUsers();
  return randomItemFromArray(data.users);
};
