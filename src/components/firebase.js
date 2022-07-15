  import {initializeApp} from 'firebase/app';
  import {getFirestore} from 'firebase/firestore';
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
  import { useState, useEffect } from 'react';
  
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
  const auth = getAuth();
  export function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }
  export function logOut(){
    return signOut(auth);
  }

  export function login(email, password){
     return signInWithEmailAndPassword(auth, email, password)
  }

  // custom Hook 
  export function useAuth(){
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => {setCurrentUser(user)})
    }, [])
    return currentUser
    
  }

  export default db;