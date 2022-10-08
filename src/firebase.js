import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAPhkVxgYaA8LgiFMAwtVLbXqBkML7jBV8",
    authDomain: "disney-clone-db129.firebaseapp.com",
    projectId: "disney-clone-db129",
    storageBucket: "disney-clone-db129.appspot.com",
    messagingSenderId: "1070360257433",
    appId: "1:1070360257433:web:f98e5998e0643fea8da908",
    measurementId: "G-FCVZ4YVFJ2"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const dp = getFirestore(firebaseApp);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage();
  


  export{auth,provider,storage};
  export default dp;