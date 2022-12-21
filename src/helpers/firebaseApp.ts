import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: process.env.VITE_APP_FIREBASE_KEY,
  authDomain: process.env.VITE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VITE_APP_DATABASE_URL,
  projectId: process.env.VITE_APP_PROJECT_ID,
  storageBucket: process.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_APP_SENDER_ID,
  appId: process.env.VITE_APP_APP_ID,
  measurementId: process.env.VITE_APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(config);
// const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
