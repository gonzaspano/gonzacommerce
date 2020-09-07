import * as firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBSUIr82v0osPuauXr1BpU2t5X3wtcT5p8",
        authDomain: "gonzacommerce.firebaseapp.com",
        databaseURL: "https://gonzacommerce.firebaseio.com",
        projectId: "gonzacommerce",
        storageBucket: "gonzacommerce.appspot.com",
        messagingSenderId: "146242879648",
        appId: "1:146242879648:web:a9139e16a6e5c3dd2d89c5",
        measurementId: "G-7NCKMCY5RG"
      }
)

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}
