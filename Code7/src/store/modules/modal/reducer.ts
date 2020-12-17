/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';
import { IModalState, ActionTypes } from './types';

const INITIAL_STATE: IModalState = {
  status: false,
  data: null,
};

const modal: Reducer<IModalState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case ActionTypes.modalCallOpen: {
        draft.status = true;
        draft.data = action.payload.data;
        break;
      }
      case ActionTypes.modalCallClose: {
        draft.status = false;
        draft.data = null;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
export default modal;
