import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDaF255dfvoohIeHSwfFvGba1vWAAVk7Vw",
  authDomain: "ecommerce-db-17a58.firebaseapp.com",
  projectId: "ecommerce-db-17a58",
  storageBucket: "ecommerce-db-17a58.appspot.com",
  messagingSenderId: "226263917477",
  appId: "1:226263917477:web:a6c42f4843af97a0357e4c",
  measurementId: "G-PK2KD6WDCJ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;