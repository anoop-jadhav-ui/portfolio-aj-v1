import firebaseApp from "./firebaseApp";
import { getDatabase, ref, child, get } from "firebase/database";
import testProfileData from "../data/testData.json";

export default async function fetchProfileData() {
  try {
    if (import.meta.env.MODE === "development") {
      console.log("Loading local data. Skipping the api call.");
      return testProfileData;
    } else {
      const dbRef = ref(getDatabase(firebaseApp));
      const snapshot = await get(child(dbRef, "/"));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw "Api call failed.";
      }
    }
  } catch (err) {
    console.log(err);
    return testProfileData;
  }
}
