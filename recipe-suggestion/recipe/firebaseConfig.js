// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz5P9H0VnpkuxtVaMGDJkHwPd9hosTwv0",
    authDomain: "recipe-suggestion-bf62b.firebaseapp.com",
    projectId: "recipe-suggestion-bf62b",
    storageBucket: "recipe-suggestion-bf62b.firebasestorage.app",
    messagingSenderId: "581662345154",
    appId: "1:581662345154:web:d98d3d066b1990e8e8b85b"
};

console.log('here');
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);