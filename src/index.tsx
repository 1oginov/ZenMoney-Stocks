import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto';

import App from 'App/components/App';
import 'Styles/index.css';

import createStore from './createStore';
import reducer from './reducer';

const container = document.getElementById('app');
const { persistor, store } = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App persistor={persistor} />
  </Provider>,
  container,
);

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js')
    .then(registration => console.log('Service Worker registered:', registration))
    .catch(error => console.log('Service Worker registration failed:', error));
}