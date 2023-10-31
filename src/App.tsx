import "./App.css";
import FAB from "./components/fab/FAB";
import Navbar from "./components/navbar/Navbar";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useState } from "react";
function App() {

  firebase.initializeApp({
    apiKey: "AIzaSyDHNxmgnzJGvn6B6e4CAKN6HWKBSst3tIw",
    authDomain: "aman-assignment.firebaseapp.com",
    projectId: "aman-assignment",
    storageBucket: "aman-assignment.appspot.com",
    messagingSenderId: "811092334830",
    appId: "1:811092334830:web:8f27ae589ca4ea19af7bff",
    measurementId: "G-64HDL00VPL",
  });
  const [user, setUser] = useState<firebase.User | null>(null);


  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Navbar
        user={user}
        signInWithGoogle={signInWithGoogle}
        signOut={signOut}
      />
      <FAB user={user}/>
    </>
  );
}

export default App;
