import authReducer from './authReducer'
import productReducer from './productReducer'
import { combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import { firestore } from 'firebase';
import {firebaseReducer, FirebaseReducer} from 'react-redux-firebase'
const rootReducer=combineReducers({
    auth:authReducer,
    product:productReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducer;