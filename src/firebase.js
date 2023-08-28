import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDs27vsT15getawbQnlPP5PjM98Of-NvwQ",
    authDomain: "twiterclone-334a2.firebaseapp.com",
    projectId: "twiterclone-334a2",
    storageBucket: "twiterclone-334a2.appspot.com",
    messagingSenderId: "64331851761",
    appId: "1:64331851761:web:0af258c715b708e12fc650",
    measurementId: "G-BRCXR22KN1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
