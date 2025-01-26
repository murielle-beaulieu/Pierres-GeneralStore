import {
  collection,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore';

import { db } from '../config/firestore';

export const getAllInventory = async () => {
  const collectionRef = collection(db, 'inventory');
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getInventoryItem = async (id) => {
  const docRef = doc(db, 'inventory', id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error (`Item not found (${id})`)
  }
  return {id: snapshot.id, ...snapshot.data()};
};
