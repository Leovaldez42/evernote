import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore')

  firebase.initializeApp({    
    apiKey: "AIzaSyC8qfOEIYxmuWRfkIlLHDvapNXkZcoOAxM",
    authDomain: "evernote-8f119.firebaseapp.com",
    databaseURL: "https://evernote-8f119.firebaseio.com",
    projectId: "evernote-8f119",
    storageBucket: "evernote-8f119.appspot.com",
    messagingSenderId: "264373563560",
    appId: "1:264373563560:web:ab2f8bf5fd1bcc5118d29d",
    measurementId: "G-GP164ZPS9P"
  });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
