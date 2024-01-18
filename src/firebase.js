// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB35Pr4HTJOGemxdUivK45v8TaKZ3YkInY",
  authDomain: "fir-blog-cafbc.firebaseapp.com",
  projectId: "fir-blog-cafbc",
  storageBucket: "fir-blog-cafbc.appspot.com",
  messagingSenderId: "448179278370",
  appId: "1:448179278370:web:0512ea9756c819017c707b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};