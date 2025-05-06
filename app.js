import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLty1AHUbDMH9aX0vkj650mRaqs9GzDac",
  authDomain: "batch-14-42808.firebaseapp.com",
  projectId: "batch-14-42808",
  storageBucket: "batch-14-42808.firebasestorage.app",
  messagingSenderId: "43874596781",
  appId: "1:43874596781:web:62c1779029a1cb60a21324",
  measurementId: "G-2G6X5W3CEV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("app", app);
