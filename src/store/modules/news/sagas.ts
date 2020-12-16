/* eslint-disable @typescript-eslint/interface-name-prefix */
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {} from './actions';
// import { IState } from '../../../../store/index';
import api from '../../../services/api';
import { ActionTypes } from './types';

// type updateRequest = ReturnType<typeof updateUserRequest>;

interface IUserUpdateResponse {
  data: any;
}

// function* news({ payload }: updateRequest) {
//   try {
//     const { user } = payload;

//     const response: AxiosResponse<IUserUpdateResponse> = yield call(
//       api.post,
//       'atualizar_usuario',
//       {
//         name: user.name,
//         pis: user.pis,
//         email: user.email,
//         password: user.password,
//       },
//     );

//     yield put(updateUserSuccess(response));
//   } catch (err) {
//     yield put(updateUserFailure(err.response.data));
//   }
// }

// export default all([takeLatest(ActionTypes.updateUserRequest, news)]);
