import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDX216JmWexpG1CEJZv6Fxrt18eDMrfLus",
  authDomain: "chat-app-bfad9.firebaseapp.com",
  projectId: "chat-app-bfad9",
  storageBucket: "chat-app-bfad9.firebasestorage.app",
  messagingSenderId: "727608473116",
  appId: "1:727608473116:web:05a49f5dd1bf0ca94d51d9",
  measurementId: "G-HP3SGLBLBS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);