import * as firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyD-bSwkR4Pi-B2UapmJkcGtHGwX1l_PeE0',
  authDomain: 'bqmenu.firebaseapp.com',
  databaseURL: 'https://bqmenu.firebaseio.com',
  projectId: 'bqmenu',
  storageBucket: 'bqmenu.appspot.com',
  messagingSenderId: '415439169452',
  appId: '1:415439169452:web:ec42aa29ac3e8a4ca43c09',
  measurementId: 'G-VZ9Y36001Z'
});

export default app;