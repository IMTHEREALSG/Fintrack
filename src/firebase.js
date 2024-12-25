import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


import { getAnalytics } from "firebase/analytics";
import {ApiKey,AuthDomain,ProjectId,StorageBucket,MessagingSenderId,AppId,MeasurementId} from "./configs";

const firebaseConfig = {
  apiKey: ApiKey,
  authDomain: AuthDomain,
  projectId: ProjectId,
  storageBucket:StorageBucket,
  messagingSenderId:MessagingSenderId,
  appId: AppId,
  measurementId: MeasurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore , analytics};
