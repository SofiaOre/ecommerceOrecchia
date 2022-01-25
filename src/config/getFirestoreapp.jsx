
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQUeZulMS5hesyYDG0egETGTRtco-JSeI",
  authDomain: "endor-app.firebaseapp.com",
  projectId: "endor-app",
  storageBucket: "endor-app.appspot.com",
  messagingSenderId: "181911303570",
  appId: "1:181911303570:web:89708f7a2eeea2a9093d4b"
};

const firestoreApp = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return firestoreApp;
};  
