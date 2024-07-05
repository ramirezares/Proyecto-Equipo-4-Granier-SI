import {
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { db } from "../firebase";

async function addUserToFirestore(user, additionalData = {}) {
  const userRef = doc(db, "users", user.uid);
  const userData = {
    id: user.uid,
    firstName: user.displayName || additionalData.firstName || "",
    lastName: additionalData.lastName || "",
    email: user.email,
    userRole: "1",
    number: user.phoneNumber || additionalData.phone || "04120000000",
    username: additionalData.username || "",
    image: "",
    career: additionalData.career || "",
    occupation: additionalData.occupation || "",
    foodPreference: additionalData.foodPreference || [],
    purchases: [],
    ...additionalData,
  };
  await addDoc(userRef, userData, { merge: true });
}

export async function signUpGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const adittionalInfo = getAdditionalUserInfo(result);

    if (adittionalInfo.isNewUser == true) {
      let number = result.user.phoneNumber;
      if (number == null) {
        number = "04120000000";
      }
      await addDoc(collection(db, "users"), {
        id: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        userRole: "1",
        number: number,
        image: result.user.photoURL,
        carrer: "",
        agrupations: [],
      });
    }

    return result.user;
  } catch (error) {
    console.error(error);
  }
}

export async function signUpFacebook() {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const additionalInfo = getAdditionalUserInfo(result);

    if (additionalInfo.isNewUser === true) {
      let number = result.user.phoneNumber;
      if (number == null) {
        number = "04120000000";
      }
      await addDoc(collection(db, "users"), {
        id: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        userRole: "1",
        number: number,
        image: result.user.photoURL,
        career: "",
        agrupations: [],
      });
    }

    return result.user;
  } catch (error) {
    console.error(error);
  }
}

export async function registerWithCredentials(
  firstName,
  lastName,
  username,
  email,
  password,
  number,
  career,
  occupation,
  purchases,
  foodPreference
) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await addUserToFirestore(user, {
      firstName,
      lastName,
      username,
      number,
      career,
      occupation,
      purchases,
      foodPreference,
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function signInGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
}

export async function signInFacebook() {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
}

export async function logOut() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
}

export async function loginWithCredentials(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUserData(email) {
  const userQuery = query(collection(db, "users"), where("email", "==", email));
  const userSnapshot = await getDocs(userQuery);
  return userSnapshot.docs[0]?.data();
}

export async function getUserId(email) {
  const userQuery = query(collection(db, "users"), where("email", "==", email));
  const userSnapshot = await getDocs(userQuery);
  return userSnapshot.docs[0]?.id;
}

export async function getUserById(id) {
  const userRef = doc(db, "users", id);
  const userSnapshot = await getDoc(userRef);
  return userSnapshot.data();
}

export async function getUserIdByUser(id) {
  const userQuery = query(collection(db, "users"), where("id", "==", id));
  const userSnapshot = await getDocs(userQuery);
  return userSnapshot.docs[0]?.id;
}

export async function updateUserData(
  firstName,
  lastName,
  username,
  email,
  img,
  number,
  career,
  occupation,
  purchases,
  foodPreference
) {
  const userId = await getUserId(email);
  if (userId) {
    await updateDoc(doc(db, "users", userId), {
      firstName,
      lastName,
      username,
      email,
      number,
      image: img,
      career,
      occupation,
      foodPreference,
      purchases,
    });
  }
}
