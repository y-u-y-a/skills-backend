import firebase from 'firebase';

if (firebase.apps.length == 0) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'skills-product.firebaseapp.com',
    databaseURL: 'https://skills-product.firebaseio.com',
    projectId: 'skills-product',
    storageBucket: 'skills-product.appspot.com',
    messagingSenderId: '928971672914',
    appId: '1:928971672914:web:282cdba736f2bf4bc37e8b',
    measurementId: 'G-7SZ3M7S187',
  });
}

export default firebase;
export const Auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const analytics = firebase.analytics();
