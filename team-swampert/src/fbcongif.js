import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIp3ZYflikvtM3_-tddxPZEQpt838_dvs",
    authDomain: "farmers-market-9e70c.firebaseapp.com",
    projectId: "farmers-market-9e70c",
    storageBucket: "farmers-market-9e70c.appspot.com",
    messagingSenderId: "907555463227",
    appId: "1:907555463227:web:cabb6594feb4441a2efc1e",
    measurementId: "G-NYPMH4H85V"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);