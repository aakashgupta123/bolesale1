// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import { createStore, applyMiddleware, compose } from "redux";
// import  rootReducer  from "./store/reducers/rootReducer";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import {
//   reduxFirestore,
//   getFirestore,
//   createFirestoreInstance
// } from "redux-firestore";
// import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
// import fbConfig from "./config/fbConfig";
// import firebase from "firebase/app";
// import { useSelector  } from 'react-redux'
// import { isLoaded  } from 'react-redux-firebase';
// import Loader from 'react-loader-spinner'


// const store=createStore(rootReducer,
//   compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//   reduxFirestore(firebase,fbConfig)
//   ));
//   // const rrfProps = {
//   //   firebase,
//   //   config: fbConfig,
//   //   dispatch: store.dispatch,
//   //   createFirestoreInstance
//   // };


//   const profileSpecificProps = {
//     userProfile: 'users',
//     useFirestoreForProfile: true,
//     enableRedirectHandling: false,
//     resetBeforeLogin: false
//   }

//   const rrfProps = {
//     firebase,
//     config: fbConfig, 
//   //second config added here
//     config: profileSpecificProps,
//     dispatch: store.dispatch,
//     createFirestoreInstance
//   };

//   function AuthIsLoaded({ children }) {
//     const auth = useSelector(state => state.firebase.auth)
//     if (!isLoaded(auth)) return <div className=" container center "><Loader
//     type="ThreeDots"
//     color="#00BFFF"
//     height={100}
//     width={100}
//     timeout={3000} //3 secs

//  /></div>;
//         return children
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//     <AuthIsLoaded>
//       <App /> 
//     </AuthIsLoaded>
//     </ReactReduxFirebaseProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

//for render on auth ready
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';




const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}


const rrfProps = {
  firebase,
  config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center"> <p>Loading Mario Plan...</p></div>;
      return children
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
      <App />
      </AuthIsLoaded>
      
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();