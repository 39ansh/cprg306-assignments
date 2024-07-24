import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to get items for a specific user
export const getItems = async (userId) => {
  try {
    // Reference to the user's items subcollection
    const itemsCollectionRef = collection(db, `users/${userId}/items`);
    const q = query(itemsCollectionRef);

    // Get all documents in the items subcollection
    const querySnapshot = await getDocs(q);

    // Array to hold items
    const items = [];

    // Loop through each document and add to items array
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    throw new Error("Failed to get items");
  }
};

// Function to add an item to a specific user's list of items
export const addItem = async (userId, item) => {
  try {
    // Reference to the user's items subcollection
    const itemsCollectionRef = collection(db, `users/${userId}/items`);

    // Add a new document with the item data
    const docRef = await addDoc(itemsCollectionRef, item);

    // Return the id of the newly created document
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    throw new Error("Failed to add item");
  }
};
