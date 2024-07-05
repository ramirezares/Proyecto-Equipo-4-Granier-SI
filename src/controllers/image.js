// imageController.js
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const uploadImage = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `images/${uuidv4()}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return { url };
};
