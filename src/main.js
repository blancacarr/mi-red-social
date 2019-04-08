// import { initRouter } from './route.js';

// const init = () => {
//     initRouter();
// }

// window.addEventListener('load', init);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVY9EZ2RXeWBBfxkXQLiENfiAWAnqoDzY",
  authDomain: "prueba-red-social-c7fcd.firebaseapp.com",
  databaseURL: "https://prueba-red-social-c7fcd.firebaseio.com",
  projectId: "prueba-red-social-c7fcd",
  storageBucket: "prueba-red-social-c7fcd.appspot.com",
  messagingSenderId: "983838152216"
};
firebase.initializeApp(config);

import { initRouter } from './route.js';

const init = () => {
  initRouter();
};

window.addEventListener('load', init);