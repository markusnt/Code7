/* eslint-disable @typescript-eslint/interface-name-prefix */
// eslint-disable-next-line no-shadow
export enum ActionTypes {
  modalCallOpen = 'MODAL_CALL_OPEN',
  modalCallClose = 'MODAL_CALL_CLOSE',
}

export interface IModal {
  status: boolean;
  data: any;
}

export interface IModalState {
  status: boolean;
  data: any;
}
