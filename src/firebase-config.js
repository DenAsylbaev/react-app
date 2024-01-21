
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA9pHh8zU5Od34nf0jfv0kF2HFp0kXFyvQ",
  authDomain: "chat-project-cef27.firebaseapp.com",
  projectId: "chat-project-cef27",
  storageBucket: "chat-project-cef27.appspot.com",
  messagingSenderId: "291993639798",
  appId: "1:291993639798:web:477d71c8881e10c07df857",
  databaseURL: "https://chat-project-cef27-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
