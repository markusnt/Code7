/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AnyIfEmpty } from 'react-redux';
import { IModal, ActionTypes } from './types';

export function modalCallOpen(data: any) {
  return {
    type: ActionTypes.modalCallOpen,
    payload: { data },
  };
}

export function modalCallClose() {
  return {
    type: ActionTypes.modalCallClose,
  };
}
