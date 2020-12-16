/* eslint-disable @typescript-eslint/interface-name-prefix */
// eslint-disable-next-line no-shadow
export enum ActionTypes {
  newsCreate = 'NEWS_CREATE',
  newsDelete = 'NEWS_DELETE',
  newsUpdate = 'NEWS_UPDATE',
}

export interface INews {
  id: number;
  title: string;
  content: string;
  author: string;
}

export interface INewsState {
  newsData: [INews];
  loading: boolean;
}
