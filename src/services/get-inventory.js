import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';

import { db } from '../config/firestore';

export const getAllInventory = async () => {
  const collectionRef = collection(db, 'inventory');
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getInventoryItem = async ({id}) => {
  const docRef = doc(db, 'inventory', id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error (`Item not found`)
  }
  return {id: snapshot.id, ...snapshot.data()};
};

export default getAllInventory();

// import { doc, getDoc } from "firebase/firestore";

// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
