import { decode, encode } from 'base-64';
import './timerConfig';
global.addEventListener = (x) => x;
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCucmHcWtfbZ_rGGBsSNwJ8x0KAe-w4H7E',
  authDomain: 'rnchat-a14d9.firebaseapp.com',
  databaseURL: 'https://rnchat-a14d9.firebaseio.com',
  projectId: 'rnchat-a14d9',
  storageBucket: 'rnchat-a14d9.appspot.com',
  messagingSenderId: '290248448374',
  appId: '1:290248448374:android:fb5d973de048a7781b4257',
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };
