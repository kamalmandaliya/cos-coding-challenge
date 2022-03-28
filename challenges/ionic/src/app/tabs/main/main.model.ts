import { AppStoreLoadingStatesModel } from '../../core/store/store.model';

export interface AuctionsModel {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  image: string;
  content: string;
  likes: number;
  comments: number;
  shared: number;
  views: number;
}

export interface AuctionsStateModel extends AppStoreLoadingStatesModel {
  activePage: number;
  pages: number[];
  listData: {
    [page: string]: AuctionsModel[];
  };
}

export interface MainPageStateModel {
  auctions: AuctionsStateModel;
}
