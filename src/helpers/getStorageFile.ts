import { getDownloadURL, ref } from "firebase/storage";
import firebaseStorage from "./firebaseStorage";

const pathReference = ref(
  firebaseStorage,
  `resume/${process.env.RESUME_FILENAME}`
);

// const httpsReference = ref(
//   firebaseStorage,
//   `https://firebasestorage.googleapis.com/b/bucket/o/resume/${process.env.RESUME_FILENAME}`
// );

export default getDownloadURL(pathReference);
