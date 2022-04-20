import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAmt0p_jLkYNvTljs06-W-tA9k3wTqCoAQ",
    authDomain: "crown-clothing-6d1e7.firebaseapp.com",
    projectId: "crown-clothing-6d1e7",
    storageBucket: "crown-clothing-6d1e7.appspot.com",
    messagingSenderId: "645332328618",
    appId: "1:645332328618:web:2cec63d8ea31164180f0d3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;