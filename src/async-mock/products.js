import { db, doc, query, where, collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

export function getProductsByCategoryPromise(categoryId) {
  return new Promise((resolve, reject) => {
    // acceso a una coleccion (multiples documentos)
    const db = getFirestore();
    let q;
    if(!categoryId) {
      q = collection(db, "productos");
    } else {
      q = query(collection(db, "productos"), where("categoria", "==", categoryId));
    } 
    getDocs(q).then((snapshot) => {
      let result = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      resolve(result);
    });
  });
};

export function getProductByIdPromise(productId) {
  return new Promise((resolve, reject) => {
     // acceso a un documento puntual
     const db = getFirestore();
    const docRef = doc(db, "productos", productId);
    getDoc(docRef).then((snapshot) => {
      if(snapshot.exists()) {
        resolve({
          id: snapshot.id,
          ...snapshot.data()
        });
      }
    });
  })
}