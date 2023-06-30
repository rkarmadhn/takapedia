import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCB6_c-EawEYniJheZbAcI7zKeb3oRdTRA",
  authDomain: "takapedia-240623.firebaseapp.com",
  projectId: "takapedia-240623",
  storageBucket: "takapedia-240623.appspot.com",
  messagingSenderId: "89076212503",
  appId: "1:89076212503:web:f5e9e949e851be2f680d52",
  measurementId: "G-LYZ201MB45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);