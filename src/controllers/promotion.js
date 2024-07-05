// promotionController.js
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const promotionCollection = collection(db, "promotions");

export const getAllPromotions = async () => {
  const promotionsSnapshot = await getDocs(promotionCollection);
  const promotionList = promotionsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return promotionList;
};

export const addPromotion = async (promotion) => {
  const docRef = await addDoc(promotionCollection, promotion);
  return docRef.id;
};

export const updatePromotion = async (id, updatedPromotion) => {
  const promotionDoc = doc(db, "promotions", id);
  await updateDoc(promotionDoc, updatedPromotion);
};

export const deletePromotion = async (id) => {
  const promotionDoc = doc(db, "promotions", id);
  await deleteDoc(promotionDoc);
};
