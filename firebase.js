// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxVhbRS_V6Hfxy5-0INMADznO149r9FxY",
  authDomain: "pantry-manager-48e4f.firebaseapp.com",
  projectId: "pantry-manager-48e4f",
  storageBucket: "pantry-manager-48e4f.appspot.com",
  messagingSenderId: "974152781973",
  appId: "1:974152781973:web:b5dd338543908285138b9c",
  measurementId: "G-KHT56S4YM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };