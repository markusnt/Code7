/* eslint-disable @typescript-eslint/interface-name-prefix */
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {} from './actions';
// import { IState } from '../../../../store/index';
import api from '../../../services/api';
import { ActionTypes } from './types';
