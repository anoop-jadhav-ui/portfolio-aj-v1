import firebase from "@firebase/app";
import "@firebase/database";
import testProfileData from "../data/testData.json";
let config = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // eslint-disable-next-line no-undef
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // eslint-disable-next-line no-undef
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  // eslint-disable-next-line no-undef
  projectId: process.env.REACT_APP_PROJECT_ID,
  // eslint-disable-next-line no-undef
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // eslint-disable-next-line no-undef
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  // eslint-disable-next-line no-undef
  appId: process.env.REACT_APP_APP_ID,
  // eslint-disable-next-line no-undef
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(config);

let firebaseData = new Promise((resolve, reject) => {
  const rootRef = firebase.database().ref().child("/");
  rootRef.on("value", function (snapshot) {
    let result = snapshot.val();
    if (result) {
      resolve(snapshot.val());
    } else {
      reject("empty data");
    }
  });
});

export default function fetchData() {
  /* GET DATA FROM FIREBASE */
  try {
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV === "development") {
      return testProfileData;
    } else {
      return firebaseData.then((result) => {
        return result;
      });
    }
  } catch (err) {
    console.log(err);
    return testProfileData;
  }
}
