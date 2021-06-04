import firebase from "firebase/app"
import "firebase/firestore"
// authenticationを有効にする
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDE3ouUJBiAaDt4b7Vw5iVSs4FAQqb5TKc",
  authDomain: "my-vue-app-ba1f1.firebaseapp.com",
  projectId: "my-vue-app-ba1f1",
  storageBucket: "my-vue-app-ba1f1.appspot.com",
  messagingSenderId: "260107084147",
  appId: "1:260107084147:web:d982ea6ce5222b3639e506",
  measurementId: "G-C9CP6W58YL",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
