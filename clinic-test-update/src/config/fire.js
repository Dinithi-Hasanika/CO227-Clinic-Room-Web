// import firebase from "firebase";

// var config = {
//   apiKey: "AIzaSyC2PE35RFwZyfSCnyoxjNTkcyQdJ3ByOkw",
//   authDomain: "clinic-web-93101.firebaseapp.com",
//   databaseURL: "https://clinic-web-93101.firebaseio.com",
//   projectId: "clinic-web-93101",
//   storageBucket: "clinic-web-93101.appspot.com",
//   messagingSenderId: "444062487282"
// };
// firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });
// export default firebase;

import firebase from "firebase";

var fire_DB = {
  apiKey: "AIzaSyC1f9QqNnB-twUTf-8PMvjLGfYMEboFApk",
  authDomain: "my-notes-b3b63.firebaseapp.com",
  databaseURL: "https://my-notes-b3b63.firebaseio.com",
  projectId: "my-notes-b3b63",
  storageBucket: "my-notes-b3b63.appspot.com",
  messagingSenderId: "620294354082"
};

firebase.initializeApp(fire_DB);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
