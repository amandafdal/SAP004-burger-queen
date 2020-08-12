import firebase from '../firebase';

export const getOrdersByStatus = (status, callback) => {
  return firebase.firestore().collection('orders')
    .orderBy('orderTime', 'asc')
    .onSnapshot((querySnapshot) => {
      const orders = querySnapshot.docs.reduce(
        (acc, doc) => {
          if (doc.data().status === status)
            acc.push({ id: doc.id, ...doc.data() });
          return acc;
        }
        , []);
      callback(orders);
    })
};

export const updateOrderStatus = (order, status) => {
  firebase.firestore().collection('orders').doc(order)
    .update(status === 'finalizado' ? { status, deliverTime: new Date() } : { status })
}