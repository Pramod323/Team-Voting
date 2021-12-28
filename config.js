import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBlD2hxU_jNfXdoSGpiR5zLPbFtQff_yHc",
  authDomain: "teamvotingapp-f0d6e.firebaseapp.com",
  databaseURL: "https://teamvotingapp-f0d6e-default-rtdb.firebaseio.com",
  projectId: "teamvotingapp-f0d6e",
  storageBucket: "teamvotingapp-f0d6e.appspot.com",
  messagingSenderId: "619497475730",
  appId: "1:619497475730:web:48cc4d6c65bd2a0fe3e04b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();