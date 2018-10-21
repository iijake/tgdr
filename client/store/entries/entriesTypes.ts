import { IEntry } from '../storeTypes';

export enum EntriesStateTypes {
  REQUEST = '@@entries/REQUEST',
  SUCCESS = '@@entries/SUCCESS',
  FAILURE = '@@entries/FAILURE',
}

export interface IEachEntriesData
  extends Readonly<{
      hot: IEntry[];
      new: IEntry[];
      top: IEntry[];
      isLoading: boolean;
    }> {}

export interface IEntriesData
  extends Readonly<{
      bot: IEachEntriesData;
      channel: IEachEntriesData;
      supergroup: IEachEntriesData;
    }> {}

export interface IEntriesState
  extends Readonly<{
      category: string;
      data: IEntriesData;
      hasError: boolean,
      limit: number;
      skip: number;
    }> {}

export interface IGetEntriesParams {
  category?: string;
  limit?: number;
  sort: 'hot' | 'new' | 'top';
  type: 'bot' | 'channel' | 'supergroup';
}

export interface IGetEntriesResponse {
  category: string;
  data: IEntry[],
  limit: number;
  skip: number;
  sort: 'hot' | 'new' | 'top';
  status: 'active' | 'pending' | 'rejected';
  type: 'bot' | 'channel' | 'supergroup';
}
