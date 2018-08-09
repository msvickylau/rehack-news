import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk,
    )
  );
}
//createStore allows us to (1) connect our store to the rootReducer -- which wraps our other reducers. (2) Utilize the Thunk middlewear which allows us to construct our action reators in a specific way.



/////////////////////////////////////////////////////////////
// If you have REDUX_DEVTOOLS_EXTENSION installed in Chrome
// then uncomment the below code to use the extension:
/////////////////////////////////////////////////////////////
//
// import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from '../reducers/rootReducer';
// import thunk from 'redux-thunk';
//
// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// }
