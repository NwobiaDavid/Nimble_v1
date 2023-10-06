// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAycYCwwssAeMOUhki08TZ3EvUKp5hGX8c",
//   authDomain: "nimble-landingpage.firebaseapp.com",
//   projectId: "nimble-landingpage",
//   storageBucket: "nimble-landingpage.appspot.com",
//   messagingSenderId: "359888903922",
//   appId: "1:359888903922:web:4e7e6ac517e1432f66ba6b",
//   measurementId: "G-FRQSXHHKYW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAycYCwwssAeMOUhki08TZ3EvUKp5hGX8c",
  authDomain: "nimble-landingpage.firebaseapp.com",
  projectId: "nimble-landingpage",
  storageBucket: "nimble-landingpage.appspot.com",
  messagingSenderId: "359888903922",
  appId: "1:359888903922:web:4e7e6ac517e1432f66ba6b",
  measurementId: "G-FRQSXHHKYW"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance

export default db;