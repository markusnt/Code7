/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { INews, ActionTypes } from './types';

export function newsCreate(news: INews) {
  return {
    type: ActionTypes.newsCreate,
    payload: { news },
  };
}

export function newsDelete(newsId: number) {
  return {
    type: ActionTypes.newsDelete,
    payload: { newsId },
  };
}

export function newsUpdate(newsId: number) {
  return {
    type: ActionTypes.newsUpdate,
    payload: { newsId },
  };
}
