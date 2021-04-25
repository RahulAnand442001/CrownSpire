import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase initialization
const firebaseConfig = {
  apiKey: "AIzaSyA6pnqrcvWUid9u-J5G88Vupy0dZcvJUtI",
  authDomain: "crwn-clothing-db-1e69c.firebaseapp.com",
  projectId: "crwn-clothing-db-1e69c",
  storageBucket: "crwn-clothing-db-1e69c.appspot.com",
  messagingSenderId: "486073570310",
  appId: "1:486073570310:web:5b1c1b2f957a23d3675f87",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// firebase authentication configuration

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
