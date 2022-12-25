import type { UserModel } from '@/models/user.model';
import { firestore } from './firestore';
import type { DocumentReference, DocumentData } from 'firebase/firestore';

const { collection, doc, setDoc, addDoc, getDoc, updateDoc } = firestore;

const COLLECTION_NAMES = {
  users: 'users',
  shippingAddresses: 'shippingAddresses',
}

export const usersCollection = collection(COLLECTION_NAMES.users);


export const getUser = async (wallet: string, data: Partial<UserModel> = {}): Promise<UserModel> => {
  const userDoc = await getDoc(doc(COLLECTION_NAMES.users, wallet));

  let user = null;

  if (userDoc.exists()) {
    user = await updateUser(wallet, data);
  }

  else {
    user = await createUser(wallet, { ...data, orders: [] });
  }

  return user
}


export const createUser = async (userRefOrWallet: string | DocumentReference<DocumentData>, data: Partial<UserModel> = {}): Promise<UserModel> => {
  const userRef = typeof userRefOrWallet === 'string' ? doc(COLLECTION_NAMES.users, userRefOrWallet) : userRefOrWallet;

  await setDoc(userRef, { ...data, orders: [] }, { merge: true });

  return (await getDoc(userRef)).data() as UserModel;
}


export const updateUser = async (userRefOrWallet: string | DocumentReference<DocumentData>, data: Partial<UserModel> = {}): Promise<UserModel> => {
  const userRef = typeof userRefOrWallet === 'string' ? doc(COLLECTION_NAMES.users, userRefOrWallet) : userRefOrWallet;

  await updateDoc(userRef, data);

  return (await getDoc(userRef)).data() as UserModel;
}


export const getUserShippingAddresses = () => { }