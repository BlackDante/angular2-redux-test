import {LIST} from '../constants/actions';


export function listReducer(state = [], action) {
  let index;

  switch (action.type) {

    case LIST.ADD_ITEM:
      return [...state, action.payload];

    case LIST.REMOVE_ITEM:
      index = state.indexOf(action.payload);

      return state.slice(0, index)
          .concat(state.slice(index + 1));

    case LIST.CLOSE_ITEM:
      index = state.indexOf(action.payload);
      action.payload.completed = !action.payload.completed;

      return state.slice(0, index)
          .concat([action.payload], state.slice(index + 1));

    default:
      return state;
  }
}
