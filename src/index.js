import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './App';
import { Store } from './Store';
import { getBaseUrl } from './config/Server';

axios.defaults.baseURL = getBaseUrl();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={Store}>
             <App />
      </Provider>
);

