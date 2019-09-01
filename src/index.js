import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Consumer as ConfigConsumer } from './ConfigContext';

import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <ConfigConsumer>
    {value => (
      <Provider store={store}>
        <App config={value} />
      </Provider>
    )}
  </ConfigConsumer>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
