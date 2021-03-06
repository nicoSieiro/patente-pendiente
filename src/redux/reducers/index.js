import { combineReducers } from 'redux';
import userReducer from './userReducer';
import {reducer as formReducer} from 'redux-form'

export default combineReducers ({
    form: formReducer,
    userReducer,
  });