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
        firtsName: result.user.displayName,
        lastName: "",
        email: result.user.email,
        userRole: "1",
        number: number,
        username: "",
        image: "",
        carrer: "",
        ocupation: "",
        foodPreference: [],
        purcharses: [],
      });
    }

    return result.user;
  } catch (error) {
    console.error(error);
  }
}

export async function signInGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const adittionalInfo = getAdditionalUserInfo(result);

    if (adittionalInfo.isNewUser) {
      let number = result.user.phoneNumber;
      if (number == null) {
        number = "04120000000";
      }
      await addDoc(collection(db, "users"), {
        id: result.user.uid,
        firtsName: result.user.displayName,
        lastName: "",
        email: result.user.email,
        userRole: "1",
        number: number,
        username: "",
        image: "",
        carrer: "",
        ocupation: "",
        foodPreference: [],
        purcharses: [],
      });
    }
    return result.user;
  } catch (error) {
    console.error(error);
  }
}

export async function signInFacebook() {
  try {
    const result = await signInWithPopup(auth, facebookProvider);

    const adittionalInfo = getAdditionalUserInfo(result);

    if (adittionalInfo.isNewUser) {
      let number = result.user.phoneNumber;
      if (number == null) {
        number = "04120000000";
      }
      await addDoc(collection(db, "users"), {
        id: result.user.uid,
        firtsName: result.user.displayName,
        lastName: "",
        email: result.user.email,
        userRole: "1",
        number: number,
        username: "",
        image: "",
        carrer: "",
        ocupation: "",
        foodPreference: [],
        purcharses: [],
      });
    }
    return result.user;
  } catch (error) {
    console.error(error);
  }
}

export async function logOut() {
  try {
    await signOut(auth);
    // Al usar esta funcion setear al usuario a NULL
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

export async function registerWithCredentials(
  firtsName,
  lastName,
  username,
  email,
  password,
  number,
  carrer,
  ocupation,
  purcharses,
  foodPreference
) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserData(user.uid, firtsName, lastName, username, email, number, carrer, ocupation,purcharses, foodPreference);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createUserData(id, firtsName, lastName, username, email, number, carrer, ocupation,purcharses, foodPreference) {
  await addDoc(collection(db, "users"), {
    id: id,
    firtsName: firtsName,
    lastName: lastName,
    username: username,
    email: email,
    userRole: "1",
    number: number,
    image: "",
    carrer: carrer,
    ocupation: ocupation,
    foodPreference: foodPreference,
    purcharses: purcharses,
  });
}

export async function getUserData(email) {
  const usersCollection = collection(db, "users");
  const userQuery = query(usersCollection, where("email", "==", email));
  const userSnapshot = await getDocs(userQuery);
  const users = userSnapshot.docs.map((doc) => doc.data());
  return users[0];
}

export async function getUserId(email) {
  const usersCollection = collection(db, "users");
  const userQuery = query(usersCollection, where("email", "==", email));
  const userSnapshot = await getDocs(userQuery);
  return userSnapshot.docs[0].ref.path.split("/")[1];
}

export async function getUserById(id) {
  const userRef = doc(db, "users", id);
  const userSnapshot = await getDoc(userRef);

  return userSnapshot.data();
}

export async function getUserIdByUser(id) {
  const usersCollection = collection(db, "users");
  const userQuery = query(usersCollection, where("id", "==", id));
  const userSnapshot = await getDocs(userQuery);
  return userSnapshot.docs[0].ref.path.split("/")[1];
}

export async function updateUserData(
    firtsName,
    lastName,
    username,
    email,
    img,
    number,
    carrer,
    ocupation,
    purcharses,
    foodPreference,
) {
  const usersCollection = collection(db, "users");
  const ref = await getUserId(email);
  await updateDoc(doc(usersCollection, ref), {
    firtsName: firtsName,
    lastName: lastName,
    username: username,
    email: email,
    number: number,
    image: img,
    carrer: carrer,
    ocupation: ocupation,
    foodPreference: foodPreference,
    purcharses: purcharses,
  });
}
