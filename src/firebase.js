import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
    apiKey: "AIzaSyC-hOb0a_M3Zlb-Hnkyndgs4kT5A6_ieTc",
    authDomain: "disneyplus-clone-9c8d1.firebaseapp.com",
    projectId: "disneyplus-clone-9c8d1",
    storageBucket: "disneyplus-clone-9c8d1.appspot.com",
    messagingSenderId: "34456720312",
    appId: "1:34456720312:web:9caeb4420731bbd873b54d",
    measurementId: "G-XPJ18NKF9N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export { auth, provider, storage };
  export default db;
