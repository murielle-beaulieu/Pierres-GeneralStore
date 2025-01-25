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
  // create a "collection" which is you selectioning a db of a name
  const collectionRef = collection(db, 'inventory');

  // create a snapshot, essentially getDocs is the API call
  const snapshot = await getDocs(collectionRef);

  // map over the docs which is
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
export default getAllInventory();
