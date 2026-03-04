import { getDownloadURL, getMetadata, ref } from 'firebase/storage'
import { downloadFile } from './downloadFile'
import { getFirebaseStorage } from './firebaseStorage'

const resumeFileName =
    process.env.NEXT_PUBLIC_RESUME_FILENAME ??
    process.env.VITE_RESUME_FILENAME ??
    'Resume_22Dec2022.pdf'

const getPathReference = () => {
    return ref(getFirebaseStorage(), `resume/${resumeFileName}`)
}

export const getCVUrl = async () => {
    try {
        return await getDownloadURL(getPathReference())
    } catch {
        const storageBucket =
            process.env.NEXT_PUBLIC_APP_STORAGE_BUCKET ??
            process.env.VITE_APP_STORAGE_BUCKET
        if (storageBucket) {
            return `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodeURIComponent(
                `resume/${resumeFileName}`
            )}?alt=media`
        }
        throw new Error('Unable to resolve resume URL')
    }
}

export const getCVLastUpdatedAt = async (): Promise<string | null> => {
    try {
        const metadata = await getMetadata(getPathReference())
        return metadata.updated ?? null
    } catch {
        return null
    }
}

export const downloadCV = async () => {
    const url = await getCVUrl()
    await downloadFile(url, 'ResumeAnoopJadhav.pdf')
}
