import { child, get, getDatabase, ref } from 'firebase/database'
import testProfileData from '../data/testData.json'
import firebaseApp from './firebaseApp'

export default async function fetchProfileData() {
    try {
        if (process.env.NODE_ENV === 'development') {
            return testProfileData
        }

        const dbRef = ref(getDatabase(firebaseApp))
        const snapshot = await get(child(dbRef, '/'))
        if (snapshot.exists()) {
            return snapshot.val()
        }

        throw new Error('Profile data fetch failed: empty snapshot')
    } catch (err) {
        console.error('Failed to fetch profile data:', err)
        return testProfileData
    }
}
