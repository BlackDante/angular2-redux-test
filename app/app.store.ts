import {createStore} from 'redux';
import {RootReducer} from './reducers/root';

export class Store {
  private store = createStore(RootReducer);

  get state() {
    return this.store.getState();
  }

  dispatch(action) {
    this.store.dispatch(action)
  }
}
