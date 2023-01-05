import type { Order, UserModel } from '@/models/user.model';
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
  userDoc.ref
  let user = null;

  if (userDoc.exists()) {

    user = await updateUser(wallet, data);
  }

  else {
    user = await saveUser(wallet, data);
  }

  return user
}


export const saveUser = async (userRefOrWallet: string | DocumentReference<DocumentData>, data: Partial<UserModel> = {}): Promise<UserModel> => {
  const userRef = typeof userRefOrWallet === 'string' ? doc(COLLECTION_NAMES.users, userRefOrWallet) : userRefOrWallet;

  await setDoc(userRef, data, { merge: true });

  return (await getDoc(userRef)).data() as UserModel;
}

export const userExists = async (wallet: string,): Promise<boolean> => {
  const userDoc = await getDoc(doc(COLLECTION_NAMES.users, wallet));

  return userDoc.exists();
}


export const createOrderRecord = (data?: Partial<Order>): Order => {
  const defaultOrder: Order = {
    id: -1,
    jerseySize: null,
    shippingAddress: null,
    status: 'SHIPPING_UNASSIGNED',
  }

  const order = data ? { ...defaultOrder, ...data } : defaultOrder;

  return order;
}


export const updateUser = async (userRefOrWallet: string | DocumentReference<DocumentData>, data: Partial<UserModel> = {}): Promise<UserModel> => {
  const userRef = typeof userRefOrWallet === 'string' ? doc(COLLECTION_NAMES.users, userRefOrWallet) : userRefOrWallet;
  const userData = (await getDoc(userRef)).data() as UserModel;
  let additionalDefaultOrders: Order[] = []

  if (data && data.mi777Balance && data.mi777Balance - userData?.orders.length > 0) {

    additionalDefaultOrders = new Array(data.mi777Balance - userData?.orders.length).fill(null).map((_, i) => createOrderRecord({
      id: userData?.orders.length,
      jerseySize: null,
      shippingAddress: null,
      status: 'SHIPPING_UNASSIGNED',
    }))
  }

  const updated = { ...userData, ...{ ...data, orders: [...userData?.orders || [], ...additionalDefaultOrders] } }
  console.log('updateUser',updated);
  await updateDoc(userRef, updated);

  return (await getDoc(userRef)).data() as UserModel;
}


export const getUserShippingAddresses = () => { }