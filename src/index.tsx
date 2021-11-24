import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyAgqb7fsHl9rTwGEswlcKA6gWOpOFbOhPw",
  authDomain: "kaveesha31gayashanrathnayaka.firebaseapp.com",
  projectId: "kaveesha31gayashanrathnayaka",
  storageBucket: "kaveesha31gayashanrathnayaka.appspot.com",
  messagingSenderId: "797086733617",
  appId: "1:797086733617:web:46ab8ebdc34a5b08c14c10",
  measurementId: "G-D2C9G9Y11C"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();