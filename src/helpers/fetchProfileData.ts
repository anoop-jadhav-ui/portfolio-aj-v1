import firebaseApp from "./firebaseApp";
import { getDatabase, ref, child, get } from "firebase/database";
import testProfileData from "../data/testData.json";

const firebaseData = new Promise((resolve, reject) => {
    const dbRef = ref(getDatabase(firebaseApp));
    get(child(dbRef, "/"))
        .then(snapshot => {
            if (snapshot.exists()) {
                resolve(snapshot.val());
            } else {
                reject("No Data");
            }
        })
        .catch(error => {
            reject(error);
        });
});

export default function fetchProfileData() {
    try {
        // eslint-disable-next-line no-undef
        if (import.meta.env.NODE_ENV === "development") {
            return testProfileData;
        } else {
            return firebaseData.then(result => {
                return result;
            });
        }
    } catch (err) {
        console.log(err);
        return testProfileData;
    }
}
