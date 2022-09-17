import { app } from "./firebase.js";
// 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);