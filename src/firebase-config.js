import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuomKO_uunuyiFPH7ZbdLgR_C1npekUM0",
  authDomain: "indiebrew-189ca.firebaseapp.com",
  projectId: "indiebrew-189ca",
  storageBucket: "indiebrew-189ca.appspot.com",
  messagingSenderId: "658047308381",
  appId: "1:658047308381:web:620108429fe7a1c1caf3b4",
  measurementId: "G-G407N9SZPF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
