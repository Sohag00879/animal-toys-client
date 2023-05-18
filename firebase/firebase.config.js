// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxoZ69POwoLRc8Q68FhSfGZBp8dbsEzO0",
  authDomain: "animal-toys.firebaseapp.com",
  projectId: "animal-toys",
  storageBucket: "animal-toys.appspot.com",
  messagingSenderId: "459022752341",
  appId: "1:459022752341:web:dd36645d263f18c29752dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
