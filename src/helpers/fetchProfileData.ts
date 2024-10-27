import { child, get, getDatabase, ref } from 'firebase/database'
import testProfileData from '../data/testData.json'
import firebaseApp from './firebaseApp'

export default async function fetchProfileData() {
    try {
        if (import.meta.env.MODE === 'development') {
            console.log('Loading local data. Skipping the api call.')
            return testProfileData
        } else {
            const dbRef = ref(getDatabase(firebaseApp))
            const snapshot = await get(child(dbRef, '/'))
            if (snapshot.exists()) {
                return snapshot.val()
            } else {
                throw 'Api call failed.'
            }
        }
    } catch (err) {
        console.log(err)
        return testProfileData
    }
}
