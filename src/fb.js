import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDVpnTfcvJ7xRNah2eP2hSXm2AnekiR1_o",
  authDomain: "todo-vuetify-81618.firebaseapp.com",
  databaseURL: "https://todo-vuetify-81618.firebaseio.com",
  projectId: "todo-vuetify-81618",
  storageBucket: "todo-vuetify-81618.appspot.com",
  messagingSenderId: "1084729321702",
  appId: "1:1084729321702:web:389f3ccdd2a685502ef327",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });
export default db;
