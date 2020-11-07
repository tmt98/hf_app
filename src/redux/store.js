import {createStore} from 'redux';
import myReducer from './action';
const store = createStore(myReducer);
export default store;
