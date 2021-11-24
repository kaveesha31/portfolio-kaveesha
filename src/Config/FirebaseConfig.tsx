import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgqb7fsHl9rTwGEswlcKA6gWOpOFbOhPw",
    authDomain: "kaveesha31gayashanrathnayaka.firebaseapp.com",
    projectId: "kaveesha31gayashanrathnayaka",
    storageBucket: "kaveesha31gayashanrathnayaka.appspot.com",
    messagingSenderId: "797086733617",
    appId: "1:797086733617:web:46ab8ebdc34a5b08c14c10",
    measurementId: "G-D2C9G9Y11C"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
