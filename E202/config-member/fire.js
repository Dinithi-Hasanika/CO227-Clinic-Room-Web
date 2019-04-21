import firebase from "firebase";

const fire_DB = {
  apiKey: "AIzaSyC1f9QqNnB-twUTf-8PMvjLGfYMEboFApk",
  authDomain: "my-notes-b3b63.firebaseapp.com",
  databaseURL: "https://my-notes-b3b63.firebaseio.com",
  projectId: "my-notes-b3b63",
  storageBucket: "my-notes-b3b63.appspot.com",
  messagingSenderId: "620294354082"
};

const fire = firebase.initializeApp(fire_DB);

export default fire;
