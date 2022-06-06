import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import usersReducer from './usersDucks';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default function generateStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
