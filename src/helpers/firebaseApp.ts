// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app'

const config = {
    apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_APP_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_APP_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_APP_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_APP_MEASUREMENT_ID,
}

const firebaseApp = initializeApp(config)
// const analytics = getAnalytics(firebaseApp);

export default firebaseApp
