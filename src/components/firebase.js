import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCNF7Ripu9p3_0CJta2WmYzPAklqipUepM",
  authDomain: "astralab-003.firebaseapp.com",
  databaseURL: "https://astralab-003.firebaseio.com",
  projectId: "astralab-003",
  storageBucket: "astralab-003.appspot.com",
  messagingSenderId: "411705174588",
  appId: "1:411705174588:web:ac03d97cd62bb3f499b139"
})
// Initialize Firebase
let firestore=firebase.firestore()
firestore.settings({timestampsInSnapshots:true})


export default firestore;



