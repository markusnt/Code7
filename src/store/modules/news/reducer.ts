/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';
import { INewsState, ActionTypes } from './types';

const INITIAL_STATE: INewsState = {
  loading: false,
  newsData: [
    {
      id: 1,
      title: 'Teste Noticia',
      content: 'Utilizei o Redux para controle de estado',
      author: 'Markus Nathan',
    },
    {
      id: 2,
      title: 'Teste Noticia',
      content: 'Utilizei o Redux para controle de estado',
      author: 'Markus Nathan',
    },
  ],
};

const news: Reducer<INewsState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case ActionTypes.newsCreate: {
        draft.newsData = [...state.newsData, action.payload.news];
        break;
      }
      case ActionTypes.newsDelete: {
        console.log(action.payload.news.id);
        // draft.newsData = [...state.newsData.filter, action.payload];
        break;
      }
      case ActionTypes.newsUpdate: {
        console.log(action.payload.news.id);
        // draft.newsData = [...state.newsData.filter, action.payload];
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
export default news;
