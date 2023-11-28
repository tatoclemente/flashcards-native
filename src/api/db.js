import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const { 
    EXPO_PUBLIC_API_KEY, 
    EXPO_PUBLIC_AUTH_DOMAIN, 
    EXPO_PUBLIC_PROJECT_ID, 
    EXPO_PUBLIC_STORAGE_BUCKET, 
    EXPO_PUBLIC_MESSAGING_SENDER_ID, 
    EXPO_PUBLIC_APP_ID, 
} = process.env
console.log(EXPO_PUBLIC_API_KEY);

const firebaseConfig = {
    apiKey: EXPO_PUBLIC_API_KEY,
    authDomain: EXPO_PUBLIC_AUTH_DOMAIN,
    projectId: EXPO_PUBLIC_PROJECT_ID,
    storageBucket: EXPO_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: EXPO_PUBLIC_MESSAGING_SENDER_ID,
    appId: EXPO_PUBLIC_APP_ID
};


// const firebaseConfig = {
//   apiKey: "AIzaSyD0HSYtgZ40qbm8hV7vNLkA_FmLIhq21TQ",
//   authDomain: "flashcard-r-native.firebaseapp.com",
//   projectId: "flashcard-r-native",
//   storageBucket: "flashcard-r-native.appspot.com",
//   messagingSenderId: "975159817450",
//   appId: "1:975159817450:web:e1885a9e2e4d47c7f8d393"
// };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)