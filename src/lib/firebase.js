import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyAil0yXHpluauj6WQolx6QZ9QmPJqiLia8",
  authDomain: "dashboard-2df43.firebaseapp.com",
  projectId: "dashboard-2df43",
  storageBucket: "dashboard-2df43.appspot.com",
  messagingSenderId: "352429009510",
  appId: "1:352429009510:web:0ba54bd64b56bbca299ba7",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
