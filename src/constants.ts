export const FIREBASE_POSITIONS_PATH = 'positions';
export const FIREBASE_USERS_PATH = 'users';

export const STOCKS_LOGOS_RESOURCE_NAME = 'stocks/logos';
export const STOCKS_LOGOS_TTL = 7 * 24 * 60 * 60 * 1000; // 1 week

export const STOCKS_QUOTES_RESOURCE_NAME = 'stocks/quotes';
export const STOCKS_QUOTES_TTL = 5 * 60 * 1000; // 5 min

export const STOCKS_QUOTES_UPDATER_INTERVAL = 30 * 1000; // 30 sec

/* eslint-disable prefer-destructuring */
export const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
export const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
export const FIREBASE_DATABASE_URL = process.env.FIREBASE_DATABASE_URL;
export const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
export const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
/* eslint-enable prefer-destructuring */
