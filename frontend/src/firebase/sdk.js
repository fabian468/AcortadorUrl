
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAubdU6Zn-zIcx4wV6sL2bXlvwYlM5AmQM",
    authDomain: "recortaurl-aa7de.firebaseapp.com",
    projectId: "recortaurl-aa7de",
    storageBucket: "recortaurl-aa7de.appspot.com",
    messagingSenderId: "654588303477",
    appId: "1:654588303477:web:4125adb674fa6421fa803c"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);