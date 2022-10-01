import {
  getFirestore, addDoc, collection, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './firebase.js';

// const firebase = require('firebase');
// require('firebase/firestore');

export const db = getFirestore(app);
// export addDoc = addDoc
export const createPost = (message, email) => {
  addDoc(collection(db, 'posts'), { message, email });
};

export const onGetPost = (callback) => {
  onSnapshot(collection(db, 'posts'), callback);
};

