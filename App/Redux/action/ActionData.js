import {CARD_CREATED} from '../action/ActionType';
import {Loader_Load} from '../action/ActionType';
import {GRAPH_DATALOAD} from '../action/ActionType';
export const ActionData = Data => {
  console.log('Action', Data);
  console.log('Test Action All Data is', Data);
  return {
    type: CARD_CREATED,
    payload: Data,
  };
};
export const LoadLoader = loader => {
  return {
    type: Loader_Load,
    payload: loader,
  };
};

export const graphData=graphD=>{
  return{
    type:GRAPH_DATALOAD,
    payload:graphD
  }
}