import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1NONSrVYYvj_qIUTCowAJ66k0sccRqmg",
  authDomain: "mangasite-b13fa.firebaseapp.com",
  databaseURL: "https://mangasite-b13fa-default-rtdb.firebaseio.com",
  projectId: "mangasite-b13fa",
  storageBucket: "mangasite-b13fa.appspot.com",
  messagingSenderId: "807443105516",
  appId: "1:807443105516:web:5125078a02a314bfac07c9",
  measurementId: "G-WM10H0LDJ4",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
