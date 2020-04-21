import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const config = {
        apiKey: "AIzaSyAhoMi6vHFkfJ1iSOdIe_LHR1C7C0NFlpI",
        authDomain: "my-project-1493788864125.firebaseapp.com",
        databaseURL: "https://my-project-1493788864125.firebaseio.com",
        projectId: "my-project-1493788864125",
        storageBucket: "my-project-1493788864125.appspot.com",
        messagingSenderId: "188330438365",
        appId: "1:188330438365:web:7d2dd56515457613573534",
        measurementId: "G-G5K99RVQK6"
  };

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const storage=firebase.storage();

  export default firebase;