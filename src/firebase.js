import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


import { getAnalytics } from "firebase/analytics";
import {ApiKey,AuthDomain,ProjectId,StorageBucket,MessagingSenderId,AppId,MeasurementId} from "./configs";
import  dotenv from "dotenv";
dotenv.config();
const firebaseConfig = {
  apiKey: process.env.ApiKey,
  authDomain: process.env.AuthDomain,
  projectId: process.env.ProjectId,
  storageBucket: process.env.StorageBucket,
  messagingSenderId:process.env.MessagingSenderId,
  appId: process.env.AppId,
  measurementId: process.env.MeasurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore , analytics};
