import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBmzK4GYUXiHusk3bxefBUkCx20kpXKl60",
  authDomain: "e-commerce-santipozzolo-react.firebaseapp.com",
  projectId: "e-commerce-santipozzolo-react",
  storageBucket: "e-commerce-santipozzolo-react.appspot.com",
  messagingSenderId: "661171909976",
  appId: "1:661171909976:web:60e0208dbd532f18d0e12d"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
