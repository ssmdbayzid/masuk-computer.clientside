// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgxsKf9GNEIBvA2zw8rUkYzs_M0TG-ubU",
  authDomain: "masuk-computers-warehouse.firebaseapp.com",
  projectId: "masuk-computers-warehouse",
  storageBucket: "masuk-computers-warehouse.appspot.com",
  messagingSenderId: "124032104161",
  appId: "1:124032104161:web:0c79ed78f547f06e5069a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;