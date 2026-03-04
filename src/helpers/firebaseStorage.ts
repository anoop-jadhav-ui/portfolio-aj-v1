import firebaseApp from './firebaseApp'
import { getStorage } from 'firebase/storage'

export const getFirebaseStorage = () => getStorage(firebaseApp)
