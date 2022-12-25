import { initializeApp } from "firebase/app";
import type { DocumentData, DocumentSnapshot, PartialWithFieldValue, SetOptions, } from 'firebase/firestore'
import {
  Firestore,
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  serverTimestamp,
  CollectionReference, DocumentReference,
  updateDoc,
  FieldValue
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDkAf6TexWWlmXaccIiy3BQ5iFBXEBAkxo",
  authDomain: "my-lady-8b48f.firebaseapp.com",
  projectId: "my-lady-8b48f",
  storageBucket: "my-lady-8b48f.appspot.com",
  messagingSenderId: "921457340252",
  appId: "1:921457340252:web:4ed71b5b2844f0ca4e5b99"
};

const app = initializeApp(firebaseConfig);

const instance: Firestore = getFirestore(app);

export const firestore = {
  instance,
  collection: (path: string, ...pathSegments: string[]): CollectionReference => collection(instance, path, ...pathSegments),
  doc: (path: string, ...pathSegments: string[]): DocumentReference<DocumentData> => doc(instance, path, ...pathSegments),
  setDoc: (documentReference: DocumentReference<DocumentData>, data: PartialWithFieldValue<DocumentData>, options: SetOptions): Promise<void> => setDoc(documentReference, data),
  addDoc: (collectionReference: CollectionReference<unknown>, data: unknown): Promise<DocumentReference<unknown>> => addDoc(collectionReference, data),
  getDoc: (documentReference: DocumentReference<unknown>): Promise<DocumentSnapshot<unknown>> => getDoc(documentReference),
  updateDoc: (documentReference: DocumentReference<unknown>, data: Partial<unknown>): Promise<void> => updateDoc(documentReference, data),
  getServerTimestamp: (): FieldValue => serverTimestamp(),
}