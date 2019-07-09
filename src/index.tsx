import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto';

import App from 'App/components/App';
import 'Styles/index.css';

import createStore from './createStore';
import reducer from './reducer';

const container = document.getElementById('root');
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);
