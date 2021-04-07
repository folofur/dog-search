import {ActionType} from '../action-types'

interface SearchDogsAction {
  type: ActionType.SEARCH_DOGS;
}
interface SearchSuccess {
  type: ActionType.SEARCH_SUCCESS;
  payload: string[];
}
interface SearchError {
  type: ActionType.SEARCH_ERROR;
  payload: string;
}
interface SelectBreed {
  type: ActionType.SELECT_BREED;
  payload: number;
}

export type Action =
  | SearchDogsAction
  | SearchSuccess
  | SearchError
  | SelectBreed;
