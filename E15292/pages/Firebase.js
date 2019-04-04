import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDakx5ZupzB7tZlAZVyPZltOed1dpb2GU8",
    authDomain: "admindb-9b8c4.firebaseapp.com",
    databaseURL: "https://admindb-9b8c4.firebaseio.com",
    projectId: "admindb-9b8c4",
    storageBucket: "admindb-9b8c4.appspot.com",
    messagingSenderId: "92830110269"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;