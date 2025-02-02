import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
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

// update - seedpack
export const updateSeedpackStock = async (id, newQty) => {
  const docRef = doc(db, 'inventory', id);
  await updateDoc(docRef, {
    seedpack_stock: newQty
  });
}


// update - seedling
export const updateSeedlingStock = async (id, newQty) => {
  const docRef = doc(db, 'inventory', id);
  await updateDoc(docRef, {
    seedling_stock: newQty
  });
}
