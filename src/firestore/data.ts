
import {
  onSnapshot,
  collection,
  getFirestore,
  query,
  limit,
  addDoc,
  orderBy,
  doc,
  getDoc,
  getDocs,
  where,
  runTransaction,
  Firestore
} from "firebase/firestore";

export class Data {
  db: Firestore;

  constructor({ firebaseApp }: any) {
    this.db = getFirestore(firebaseApp);
  }

  addRestaurant(data) {
    const restaurantsCol = collection(this.db, 'restaurants');
    return addDoc(restaurantsCol, data);
  }

  getAllRestaurants(renderer) {
    const restaurantsCol = collection(this.db, 'restaurants');
    const restaurantsQuery = query(restaurantsCol, orderBy("avgRating", "desc"), limit(50));
    this.getDocumentsInQuery(restaurantsQuery, renderer);
  }

  getDocumentsInQuery(restaurantsQuery, renderer) {
    onSnapshot(restaurantsQuery, (snapshot) => {
      if (!snapshot.size) return renderer.empty();

      snapshot.docChanges().forEach((change) => {
        if (change.type === "removed") {
          renderer.remove(change.doc);
        } else {
          renderer.display(change.doc);
        }
      });
    });
  }

  async getRestaurant(id) {
    const docRef = doc(this.db, "restaurants", id);
    return await getDoc(docRef);
  }

  async getRestaurantRatings(doc) {
    const ratingsCol = collection(doc.ref, 'ratings');
    const ratingsQuery = query(ratingsCol, orderBy("timestamp", "desc"));
    return await getDocs(ratingsQuery);
  }

  getFilteredRestaurants(filters, renderer) {
    let filtersWhere = [];
    let filtersOrder = [];

    if (filters.category !== 'Any') {
      filtersWhere.push(where("category", "==", filters.category));
    }

    if (filters.city !== 'Any') {
      filtersWhere.push(where("city", "==", filters.city));
    }

    if (filters.price !== 'Any') {
      filtersWhere.push(where("price", "==", filters.price.length));
    }

    if (filters.sort === 'Rating') {
      filtersOrder.push(orderBy('avgRating', 'desc'));
    } else if (filters.sort === 'Reviews') {
      filtersOrder.push(orderBy('numRatings', 'desc'));
    }

    const restaurantsCol = collection(this.db, 'restaurants');
    const filtersQuery = query(
      restaurantsCol,
      ...filtersWhere,
      ...filtersOrder
    );

    this.getDocumentsInQuery(filtersQuery, renderer);
  }

  async addRating(restaurantID, rating) {
    try {
      const docRef = doc(this.db, "restaurants", restaurantID);
      const ratingsCol = collection(docRef, 'ratings');
      const ratingsDocRef = doc(ratingsCol);

      await runTransaction(this.db, async (transaction) => {
        const ratingsDoc = await transaction.get(docRef);
        const data = ratingsDoc.data();
        const newAverage =
          (data.numRatings * data.avgRating + rating.rating) /
          (data.numRatings + 1);

        return transaction.set(ratingsDocRef, {
          numRatings: data.numRatings + 1,
          avgRating: newAverage,
          ...rating,
        }, { merge: true });
      });
    } catch (e) {
      console.error(e);
    }
  }

  checkForEmpty(callback) {
    const restaurantsCol = collection(this.db, "restaurants");
    const restaurantsQuery = query(restaurantsCol, limit(1));
    onSnapshot(restaurantsQuery, snapshot => {
      callback(snapshot);
    });
  }
}