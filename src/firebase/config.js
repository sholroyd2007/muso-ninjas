import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDAsa6sgn7xXU5S9TT3EMv19nKdB_1XH40",
    authDomain: "muso-ninjas-d8524.firebaseapp.com",
    projectId: "muso-ninjas-d8524",
    storageBucket: "muso-ninjas-d8524.appspot.com",
    messagingSenderId: "744644982031",
    appId: "1:744644982031:web:2167039d94f52b363b3a7a"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }