import {ACTION_CREATED} from '../action/ActionType';
export const ActionData = Data => {
  console.log('Action', Data);
  console.log('Test Action All Data is', Data);
  return {
    type: 'TEST',
    payload: Data,
  };
};
