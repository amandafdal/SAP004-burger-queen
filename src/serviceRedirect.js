import firebase from './firebase';

const serviceRedirect = (props) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      localStorage.user = firebase.auth().currentUser;
      const uid = firebase.auth().currentUser.uid;
      firebase.firestore().collection('employee').doc(uid).get()
        .then((doc) => doc.data().service)
        .then((service) => service === 'chef'
          ? props.history.push('./kitchen')
          : props.history.push('./attendence')
        );
    }
  });
};

export default serviceRedirect;