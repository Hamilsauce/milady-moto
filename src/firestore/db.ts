import type { Order, UserModel } from '@/models/user.model';
import { firestore } from './firestore';
import { type DocumentReference, type DocumentData, type DocumentSnapshot, onSnapshot, type Unsubscribe, QueryDocumentSnapshot, QuerySnapshot, CollectionReference, query, } from 'firebase/firestore';

const { collection, doc, setDoc, addDoc, getDoc, updateDoc, getDocs } = firestore;

const COLLECTION_NAMES = {
  users: 'users',
  orders: 'orders',
}

export const userCollectionRef = collection(COLLECTION_NAMES.users);

export const getOrderCollectionRef = (wallet: string) => collection(COLLECTION_NAMES.users, wallet, 'orders');

export const getUserDocRef = (wallet: string): DocumentReference<DocumentData> => doc(COLLECTION_NAMES.users, wallet)

export const listenOnUser = (wallet: string, callback: (doc: DocumentSnapshot<DocumentData>) => void): Unsubscribe => {
  return onSnapshot(getUserDocRef(wallet), callback);
}

export const listenOnUserOrders = (wallet: string, callback: (querySnapshot: QuerySnapshot) => void): Unsubscribe => {
  return onSnapshot(getOrderCollectionRef(wallet), callback);
}

export const getUserDoc = async (ref: DocumentReference): Promise<DocumentSnapshot<unknown>> => {
  return await getDoc(ref);
}

export const getOrders = async (wallet: string): Promise<QueryDocumentSnapshot<unknown>[]> => {
  return (await getDocs(getOrderCollectionRef(wallet))).docs;
}

export const addNewOrder = async (wallet: string, { index }: Partial<Order>): Promise<DocumentReference<unknown>> => {
  const defaultOrder: Order = {
    index,
    jerseySize: null,
    shippingAddress: null,
    status: 'SHIPPING_UNASSIGNED',
  }

  const collRef = collection('users', wallet, 'orders');

  const res = await addDoc(collRef, defaultOrder);

  return res;
}

export const updateUserOrder = async (wallet: string, id: string, updates: Partial<Order>): Promise<void> => {
  await setDoc(doc(COLLECTION_NAMES.users, wallet, 'orders', id), updates, { merge: true });
}

export const getUser = async (wallet: string, { mi777Balance }: Partial<UserModel> = {}, returnSubscriber = true): Promise<UserModel> => {
  const balance = mi777Balance || 0;
  const userDoc = await getUserDoc(getUserDocRef(wallet));
  const userExists = userDoc.exists();

  await setDoc(getUserDocRef(wallet), { mi777Balance: balance }, { merge: true });

  if (!userExists) {
    for (let index = 0; index < balance; index++) {
      await addNewOrder(wallet, { index });
    }
  }

  return {
    //@ts-ignore
    ...(userDoc.data()),
    orders: (await getOrders(wallet)).reduce((acc, curr, i) => ({ ...acc, [curr.id]: curr }), {})
  } as UserModel;
}