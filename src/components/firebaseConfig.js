import firebase from "@firebase/app";
import "@firebase/database";

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

console.log(config);
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

export default async function fetchData() {
  /*GET DATA FROM FIREBASE*/
  let result = await firebaseData
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return result;
}
