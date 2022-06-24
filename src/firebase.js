  import {initializeApp} from 'firebase/app';
  import {getFirestore} from 'firebase/firestore'
  
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyC3-PZQEXTETk29XQ9BLlF7n03jleVH4P4",
    authDomain: "to-do-cp-93bd8.firebaseapp.com",
    projectId: "to-do-cp-93bd8",
    storageBucket: "to-do-cp-93bd8.appspot.com",
    messagingSenderId: "1072065953760",
    appId: "1:1072065953760:web:e258b3b2738f6dc1c93585",
    measurementId: "G-DMNCS6J6BK"
  });

  const db = getFirestore(firebaseApp);


  export default db;