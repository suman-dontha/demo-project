export const API_BASE = 'https://api.thecatapi.com/v1';
const API_KEY = '0db431c6-efed-4071-8ff6-10c3bbf37e4a';
//const API_KEY = 'live_9no7Do61YfjUD4tpG8QubvhJeYYAATCoWTfTqXTCgxRDA7SeJqKkNEgT6inBbDoy';

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY
};

export const POST_IMAGE_HEADERS = {
  'Content-Type': 'multipart/form-data',
  'x-api-key': API_KEY
};