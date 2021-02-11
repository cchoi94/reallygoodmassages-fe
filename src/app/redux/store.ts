import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers/userReducer';

import thunk from 'redux-thunk';

const allReducers = combineReducers({
  user: userReducer,
});

const allStoreEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(allReducers, allStoreEnhancers);

export default store;
