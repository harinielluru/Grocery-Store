// import { createContext, useContext, useEffect, useState } from "react";
// import { onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebase.config"; // adjust this path if needed

// const AuthContext = createContext();

// export const AuthProvide = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Register
//   const registerUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Login
//   const loginUser = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Logout
//   const logout = () => {
//     return signOut(auth);
//   };

//   // Google Sign-in
//   const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
//   };

//   // Auth observer
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, user => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const value = {
//     currentUser,
//     registerUser,
//     loginUser,
//     logout,
//     signInWithGoogle,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// // useAuth Hook
// export const useAuth = () => useContext(AuthContext);

// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from "../firebase/firebase.config.js";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);
  const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user));
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, registerUser, loginUser, logout, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
