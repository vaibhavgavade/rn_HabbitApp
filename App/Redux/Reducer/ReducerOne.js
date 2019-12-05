import {CARD_CREATED} from '../action/ActionType';
import {Loader_Load} from '../action/ActionType';
import {GRAPH_DATALOAD} from '../action/ActionType';
const INITIAL_STATE = {
  data: [],
};
export const ReducerOne = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_CREATED: {
      return {
        data: [...state.data, action.payload],
      };
    }
    case Loader_Load: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
