import {Injectable} from "@angular/core";
import {Store} from "../app.store";
import {LIST} from '../constants/actions';

@Injectable()
export class ListActions {

  private store:Store;

  constructor(_store:Store) {
    this.store = _store;
  }

  add(item) {
    this.store.dispatch({
      type   : LIST.ADD_ITEM,
      payload: item
    })
  }

  remove(item) {
    this.store.dispatch({
      type   : LIST.REMOVE_ITEM,
      payload: item
    })
  }

  close(item) {
    this.store.dispatch({
      type   : LIST.CLOSE_ITEM,
      payload: item
    })
  }
}
