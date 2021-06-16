import firebase from 'firebase';

//informacion de la aplicacion copiada desde firebase
const config = {
    apiKey: "AIzaSyAGVV8LvWRIdjtQxS2fCCi5zb8TtuJyavA",
  authDomain: "vianeybd-39484.firebaseapp.com",
  projectId: "vianeybd-39484",
  storageBucket: "vianeybd-39484.appspot.com",
  messagingSenderId: "931294122269",
  appId: "1:931294122269:web:4770ff8247c9d65a0491f4"
  };
  const fire= firebase.initializeApp(config);
  export default fire