import { getDownloadURL, ref } from "firebase/storage";
import firebaseStorage from "./firebaseStorage";

const pathReference = ref(
  firebaseStorage,
  `resume/${import.meta.env.VITE_RESUME_FILENAME}`
);

export default getDownloadURL(pathReference);
