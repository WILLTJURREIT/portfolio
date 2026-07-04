/* ==========================================================
   VISITOR COUNTER
   ----------------------------------------------------------
   Responsibilities:
   • Connect to Firebase Firestore
   • Track unique portfolio visits
   • Prevent duplicate counts using localStorage
   • Animate the visitor counter
========================================================== */

import { db } from "./firebase.js";

import {
  doc,
  runTransaction
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";


/* ==========================================================
   COUNTER ANIMATION
   ----------------------------------------------------------
   Smoothly animates the visitor count from zero to the
   current value retrieved from Firestore.
========================================================== */

function animateCounter(element, target) {
  let current = 0;
  const increment = Math.ceil(target / 80);

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    element.textContent = current.toLocaleString();
  }, 12);
}


/* ==========================================================
   UPDATE VISITOR COUNTER
   ----------------------------------------------------------
   • Checks whether this browser has already visited.
   • Increments Firestore only on the first visit.
   • Retrieves the latest visitor count.
   • Starts the animated counter.
========================================================== */

async function updateVisitorCounter() {
  const counter = document.getElementById("visitorCount");

  if (!counter) return;


  /* --------------------------------------------------------
     Prevent duplicate counting on the same device.
  -------------------------------------------------------- */

  const hasVisited = localStorage.getItem("williamPortfolioVisited");

  try {
    /* ------------------------------------------------------
       Reference the Firestore document that stores the
       portfolio visitor count.
    ------------------------------------------------------- */
    const counterRef = doc(db, "stats", "portfolio");

    let finalCount;


    /* ------------------------------------------------------
       First-time visitor
       Increment the counter using a Firestore transaction.
    ------------------------------------------------------- */
    if (!hasVisited) {
      finalCount = await runTransaction(db, async transaction => {
        const counterDoc = await transaction.get(counterRef);
        const currentViews = counterDoc.data().views || 0;
        const updatedViews = currentViews + 1;

        transaction.update(counterRef, {
          views: updatedViews
        });

        return updatedViews;
      });

      localStorage.setItem("williamPortfolioVisited", "true");
    } 
      /* ------------------------------------------------------
       Returning visitor
       Read the current count without incrementing it.
    ------------------------------------------------------- */
    else {
      const counterDoc = await runTransaction(db, async transaction => {
        const docSnapshot = await transaction.get(counterRef);
        return docSnapshot;
      });

      finalCount = counterDoc.data().views || 0;
    }



/* ------------------------------------------------------
       Display the visitor count with animation.
    ------------------------------------------------------- */
    counter.classList.remove("loading-counter");
    animateCounter(counter, finalCount);
  } 
  
  /* --------------------------------------------------------
     Error handling
     Display a fallback value if Firestore is unavailable.
  -------------------------------------------------------- */
  catch (error) {
    console.error("Visitor counter error:", error);

    counter.classList.remove("loading-counter");
    counter.textContent = "--";
  }
}


/* ==========================================================
   APPLICATION INITIALIZATION
   ----------------------------------------------------------
   Start the visitor counter after the page has finished
   loading.
========================================================== */
document.addEventListener("DOMContentLoaded", updateVisitorCounter);