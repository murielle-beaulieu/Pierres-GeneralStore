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

export const getInventoryItem = async (id) => {
  const docRef = doc(db, 'inventory', id);
  const snapshot = await getDoc(docRef);
  console.log(snapshot)
  if (!snapshot.exists()) {
    throw new Error (`Item not found, (Item# ${id})`)
  }
  return {id: snapshot.id, ...snapshot.data()};
};

console.log(getInventoryItem('1'));


// ->>>> maybe I need to use the context and use the data.id

// export const getMovieById = async (id) => {
//   const docRef = doc(db, 'movies', id);
//   const snapshot = await getDoc(docRef);
//   if (!snapshot.exists()) {
//     throw new Error('Could not find movie with id ' + id);
//   }
//   return { id: snapshot.id, ...snapshot.data() };
// };
