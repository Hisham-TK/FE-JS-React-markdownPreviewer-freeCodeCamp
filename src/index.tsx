import { createRoot } from 'react-dom/client';
import Provider from 'react-redux/es/components/Provider';
import App from './features/App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import './styles/styles.sass';
import React from 'react';

const container = document.getElementById('root');
if (!container) throw new Error('empty container element');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
