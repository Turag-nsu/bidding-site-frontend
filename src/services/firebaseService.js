// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwmKJcqCljWCtBLmYLNUfBOgLEUNdUkqs",
  authDomain: "bidding-ce951.firebaseapp.com",
  projectId: "bidding-ce951",
  storageBucket: "bidding-ce951.appspot.com",
  messagingSenderId: "400300296765",
  appId: "1:400300296765:web:d498218e3f6813fc6d7854",
  measurementId: "G-5L8XV75PCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
// upload image to firebase storage and get the URL
const uploadImage = async (image, index) => {
    const storageRef = ref(storage, `images/${Date.now()}-${index}-${image.name}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    return url;
};

export { uploadImage };