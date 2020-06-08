import firebasae from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCq-Zb14cepqWSpbXiz3wF_Q-4v0gHTZZE",
    authDomain: "crown-db-ec8a9.firebaseapp.com",
    databaseURL: "https://crown-db-ec8a9.firebaseio.com",
    projectId: "crown-db-ec8a9",
    storageBucket: "crown-db-ec8a9.appspot.com",
    messagingSenderId: "658658481958",
    appId: "1:658658481958:web:0a1d3ec088486e4779d3e7",
    measurementId: "G-4NY8HKPR19"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName , email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebasae.initializeApp(config);

export const auth = firebasae.auth();
export const firestore = firebasae.firestore();

const provider = new firebasae.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebasae;