// import { FirebaseApp } from 'firebase/app';
// import { collection, onSnapshot } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
// import { getAuth,onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    
        apiKey: "AIzaSyADMLIL7N-lWowF3_P_BqvAF0p0TkOqG3g",
        authDomain: "next-todo-4e915.firebaseapp.com",
        projectId: "next-todo-4e915",
        storageBucket: "next-todo-4e915.appspot.com",
        messagingSenderId: "971659027880",
        appId: "1:971659027880:web:03a4422cb5c3989723e99d"
      
    // apiKey: process.env.NEXT_PUBLIC_APIKEY,
    // authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    // projectId: process.env.NEXT_PUBLIC_PROJECTID,
    // storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    // appId: process.env.NEXT_PUBLIC_APPID
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

 
