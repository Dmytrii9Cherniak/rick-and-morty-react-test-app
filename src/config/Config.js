import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDpucnVo5FqumDWABIT2kH77xx5HrWOF7w",
    authDomain: "reactrickandmortyapplication.firebaseapp.com",
    projectId: "reactrickandmortyapplication",
    storageBucket: "reactrickandmortyapplication.appspot.com",
    messagingSenderId: "627692346633",
    appId: "1:627692346633:web:a922e958d39b49930e47d8",
    measurementId: "G-X4MTRM01FC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
