import {combineReducers} from 'redux';
import {listReducer} from "./list.reducer";

export const RootReducer = combineReducers({
  list: listReducer
});
