// eslint-disable-next-line import/no-unresolved
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './firebase.js';
// 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
// import { GoogleAuthProvider } from "./firebase.js";
// import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const authGoogle = new GoogleAuthProvider(app);
// export const logout = signOut(app);
// export const authEmailandPass = signInWithEmailAndPassword(app);
/* export const resgister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
} */

/* export const registerGoogle =  (email, password) => {
    signInWithPopup(auth, provider);
} */
