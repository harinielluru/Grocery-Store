// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_Auth_Domain,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,
//   appId: import.meta.env.VITE_APPID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth =  getAuth(app);

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Needed for authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrND4kv6Jv_11-IokZ3yxgeCQbrcIST04",
  authDomain: "shopsmart-5753c.firebaseapp.com",
  projectId: "shopsmart-5753c",
  storageBucket: "shopsmart-5753c.appspot.com", // ✅ fixed typo: should be .app**spot**.com
  messagingSenderId: "651313570635",
  appId: "1:651313570635:web:4dc048d26e9d4c74d7bece",
  measurementId: "G-RWGRY3LJ6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Analytics
const analytics = getAnalytics(app);

// ✅ Export auth to use in your app
export const auth = getAuth(app);
