import { createSelector } from '@ngxs/store';
import { MainPageStateModel } from './main.model';
import { MainPageState } from './main.state';

export const selectAuctions = () =>
  createSelector([MainPageState], (state: MainPageStateModel) =>
    state.auctions.pages
      .map((key: number) => state.auctions.listData[key])
      .reduce((a, b) => a.concat(b), [])
  );

export const selectAuctionsIsLoading = () =>
  createSelector(
    [MainPageState],
    (state: MainPageStateModel) => state.auctions.isLoading
  );
