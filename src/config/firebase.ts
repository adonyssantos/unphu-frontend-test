import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIZ7HKSjvZwhJWfdmvQo6l6HOdoceNG2o',
  authDomain: 'unphu-frontend-test.firebaseapp.com',
  projectId: 'unphu-frontend-test',
  storageBucket: 'unphu-frontend-test.appspot.com',
  messagingSenderId: '110139257677',
  appId: '1:110139257677:web:a56bc42a3ebf4922ae7d04',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
