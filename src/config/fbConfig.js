import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firebase-storage'
var firebaseConfig = {
  apiKey: "AIzaSyArgELQDMYlConxUp2b2xVuZFkLEgNiDjQ",
  authDomain: "bolesale1.firebaseapp.com",
  databaseURL: "https://bolesale1.firebaseio.com",
  projectId: "bolesale1",
  storageBucket: "bolesale1.appspot.com",
  messagingSenderId: "302042845704",
  appId: "1:302042845704:web:956cbd14accb9b4d8077bd",
  measurementId: "G-ELZHTXTZMP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  export default firebase