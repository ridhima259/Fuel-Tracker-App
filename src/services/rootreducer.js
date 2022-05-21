import { configureStore,combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import rootReducer from './Home/reducer'

const reducer = combineReducers({rootReducer});

const store = configureStore({ reducer,   middleware: [thunk]})

export default store;