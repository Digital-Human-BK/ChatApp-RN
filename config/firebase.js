import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import Constants from "expo-constants";

// Firebase config
const firebaseConfig = {
  apiKey: Constants.manifest.extra.API_KEY,
  authDomain: Constants.manifest.extra.AUTH_DOMAIN,
  projectId: Constants.manifest.extra.PROJECT_ID,
  storageBucket: Constants.manifest.extra.STORAGE_BUCKET,
  messagingSenderId: Constants.manifest.extra.MESSAGING_SENDER_ID,
  appId: Constants.manifest.extra.APP_ID,
  databaseURL: Constants.manifest.extra.databaseURL,
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
