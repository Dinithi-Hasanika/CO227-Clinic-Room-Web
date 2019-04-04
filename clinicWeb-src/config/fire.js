import firebase from "firebase";

var config = {
  apiKey: "AIzaSyC2PE35RFwZyfSCnyoxjNTkcyQdJ3ByOkw",
  authDomain: "clinic-web-93101.firebaseapp.com",
  databaseURL: "https://clinic-web-93101.firebaseio.com",
  projectId: "clinic-web-93101",
  storageBucket: "clinic-web-93101.appspot.com",
  messagingSenderId: "444062487282"
};
const fire = firebase.initializeApp(config);
export default fire;
