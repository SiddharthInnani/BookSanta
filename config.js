
import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIu5JKLZ4FocwQu0UY5W8VSEK0P51zWng",
    authDomain: "book-santa-70f6b.firebaseapp.com",
    projectId: "book-santa-70f6b",
    storageBucket: "book-santa-70f6b.appspot.com",
    messagingSenderId: "487097318122",
    appId: "1:487097318122:web:1252f07d01ed90cd413593",
    measurementId: "G-96S3ZNBS24"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();