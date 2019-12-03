import {CARD_CREATED} from '../action/ActionType';
import {Loader_Load} from '../action/ActionType';
const INITIAL_STATE = {
  data: [],
  loading: {},
};
export const ReducerOne = (state = INITIAL_STATE, action) => {
  console.log('Test', action.type);
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
