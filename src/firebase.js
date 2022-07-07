import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgBv0mZJSeugMSccQkY0H5RHvupHp3O6E",
  authDomain: "ebanx3.firebaseapp.com",
  projectId: "ebanx3",
  storageBucket: "ebanx3.appspot.com",
  messagingSenderId: "410696465229",
  appId: "1:410696465229:web:2ba2c45943ca5b70c05504"
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const collectionProductos = collection(db, "products");
export const collectionOrdenes = collection(db, "ordenes");