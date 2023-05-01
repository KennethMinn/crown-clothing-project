import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const loggerMiddleware = store => next => action => {
  if (!action.type) return next(action);

  console.log('type : ', action.type);
  console.log('payload : ', action.payload);
  console.log('currentState : ', store.getState());

  next(action);
  console.log('next state : ', store.getState());
};

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

const sagaMiddleWare = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [loggerMiddleware, sagaMiddleWare];

const composeEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composeEnhancers);

sagaMiddleWare.run(rootSaga);

// export const persistor = persistStore(store);
