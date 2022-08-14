import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppMain';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
