import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC1DziZjYiqocD6piXcQzBNCtcMRbHeaLA",
  authDomain: "mercado-local-a0d6b.firebaseapp.com",
  projectId: "mercado-local-a0d6b",
  storageBucket: "mercado-local-a0d6b.appspot.com",
  messagingSenderId: "1055653088364",
  appId: "1:1055653088364:web:f02cf4b02dafa127a45c49",
  measurementId: "G-89333KMR6N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('Fire inicializado com sucesso');

export { app };
