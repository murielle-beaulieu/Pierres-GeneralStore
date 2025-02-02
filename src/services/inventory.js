import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import { db } from '../config/firestore';

// real all
export const getAllInventory = async () => {
  const collectionRef = collection(db, 'inventory');
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// read one
export const getInventoryItem = async (id) => {
  const docRef = doc(db, 'inventory', id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error (`Item not found (${id})`)
  }
  return {id: snapshot.id, ...snapshot.data()};
};

// update
export const updateItemStock = async (id, newData) => {
  const docRef = doc(db, 'inventory', id);
  return updateDoc(docRef, newData)
}
