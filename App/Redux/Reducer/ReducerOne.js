import {ACTION_CREATED} from '../action/ActionType';
const INITIAL_STATE = {
  data: [],
};
export const ReducerOne = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TEST': {
      return {
        data: [...state.data, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
