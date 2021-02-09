import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDzjtIL5yZ_DarqzeqNTwnvltmXDZFItg8",
    authDomain: "personalsite-6b7f7.firebaseapp.com",
    databaseURL: "https://personalsite-6b7f7-default-rtdb.firebaseio.com",
    projectId: "personalsite-6b7f7",
    storageBucket: "personalsite-6b7f7.appspot.com",
    messagingSenderId: "442679242582",
    appId: "1:442679242582:web:ffdaca06f057a365e070f7",
    measurementId: "G-Y3LPE3C17P"
  };

// Initialize Firebase, firestore and authentication
firebase.initializeApp(firebaseConfig)

export default firebase