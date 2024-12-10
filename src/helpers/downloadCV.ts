import { getDownloadURL, ref } from 'firebase/storage'
import { downloadFile } from './downloadFile'
import firebaseStorage from './firebaseStorage'

const pathReference = ref(
    firebaseStorage,
    `resume/${import.meta.env.VITE_RESUME_FILENAME}`
)

export const getCVUrl = async () => {
    return await getDownloadURL(pathReference)
}

export const downloadCV = async () => {
    const url = await getDownloadURL(pathReference)
    downloadFile(url, 'ResumeAnoopJadhav.pdf')
}
