import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoryState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state = initialState, action: Action): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { ...state, loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
