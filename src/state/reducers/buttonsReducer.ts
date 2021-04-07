import { ActionType } from '../action-types';
import { Action } from '../actions'

interface ButtonState {
  loading: boolean;
  error: string | null;
  dogs: string[];
  selected: number | null;
}

const buttonsReducer = (
  state: ButtonState,
  action: Action
): ButtonState => {

  switch (action.type) {
    case ActionType.SEARCH_DOGS:
      return { loading: true, error: null, dogs: [], selected: null };
    case ActionType.SEARCH_SUCCESS:
      return {
        loading: false,
        error: null,
        dogs: action.payload,
        selected: null,
      };
    case ActionType.SEARCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        dogs: [],
        selected: null,
      };
    case ActionType.SELECT_BREED:
      return {
        loading: false,
        error: null,
        dogs: [...state.dogs],
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default buttonsReducer;
