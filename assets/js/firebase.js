/* ==========================================================
   FIREBASE CONFIGURATION
   ----------------------------------------------------------
   Responsibilities:
   • Initialize the Firebase application
   • Connect to Cloud Firestore
   • Export the Firestore database instance
========================================================== */


/* ==========================================================
   FIREBASE MODULE IMPORTS
========================================================== */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";


/* ==========================================================
   FIREBASE PROJECT CONFIGURATION
   ----------------------------------------------------------
   Configuration credentials for the portfolio's Firebase
   project. Used to establish the connection to Firestore.
========================================================== */
const firebaseConfig = {
  apiKey: "AIzaSyATSVvKzAPlrHCTmkYo6wPlB5S7ngGm9Fo",
  authDomain: "william-portfolio-b1546.firebaseapp.com",
  projectId: "william-portfolio-b1546",
  storageBucket: "william-portfolio-b1546.firebasestorage.app",
  messagingSenderId: "708605175642",
  appId: "1:708605175642:web:895ba033f6750b10377563"
};


/* ==========================================================
   INITIALIZE FIREBASE
========================================================== */
const app = initializeApp(firebaseConfig);

/* ==========================================================
   INITIALIZE CLOUD FIRESTORE
========================================================== */
const db = getFirestore(app);


/* ==========================================================
   EXPORTS
========================================================== */
export { db };