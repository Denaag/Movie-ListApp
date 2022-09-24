// index.js is the starting point of every React JS app
import React from 'react';
import ReactDOM from 'react-dom/client'; //only call react-dom once in our entire app, no matter how big the app is.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //ReactDom is used to render our components and entire app - into the real DOM, the div with ID of root on index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
