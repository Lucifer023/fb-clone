import firebase from '../node_modules/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCME0SXwjZPvnFuyT3w6ik5quwuPawHKBk",
    authDomain: "facebook-clone-1a977.firebaseapp.com",
    projectId: "facebook-clone-1a977",
    storageBucket: "facebook-clone-1a977.appspot.com",
    messagingSenderId: "352757250019",
    appId: "1:352757250019:web:59d99792b0d578da2112d6",
    measurementId: "G-Q940GDGYWZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;