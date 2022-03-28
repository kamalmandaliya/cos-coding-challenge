import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';
import { FetchAuctionsActions } from './main.actions';
import { MainPageStateModel, AuctionsModel } from './main.model';

export const initialState: MainPageStateModel = {
  auctions: {
    isLoading: true,
    isFailed: false,
    isSuccess: false,
    error: null,
    activePage: 1,
    pages: [],
    listData: null,
  },
};

export const AUCTIONS_STATE_TOKEN = new StateToken<MainPageStateModel>('main');

@State({
  name: AUCTIONS_STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class MainPageState {
  constructor(private apiService: ApiService) {}

  /* Auctions Actions */
  @Action(FetchAuctionsActions.FetchAuctions)
  fetchAuctions(
    ctx: StateContext<MainPageStateModel>,
    action: FetchAuctionsActions.FetchAuctions
  ) {
    const state = ctx.getState();
    if (!state.auctions.listData || action.isRefresh) {
      ctx.patchState({
        auctions: {
          ...state.auctions,
          activePage: 1,
          pages: [],
          isLoading: true,
          isFailed: false,
          isSuccess: false,
        },
      });
    }

    return this.apiService
      .get(action.api)
      .pipe(
        // tap((auctions: AuctionsModel[]) => {
        //   console.log(auctions);
        //   ctx.dispatch(new FetchAuctionsActions.FetchAuctionsSuccess(auctions, action.page));
        // }),
        map((results) => results),
        catchError(async (error) => console.log(error))
      )
      .subscribe(
        (data) => {
          console.log(data);
        }
        // catchError(() => {
        //   ctx.dispatch(
        //     new FetchAuctionsActions.FetchAuctionsFail('Error! Please try again.')
        //   );
        // })
      );
  }

  @Action(FetchAuctionsActions.FetchAuctionsSuccess)
  fetchAuctionsSuccess(
    ctx: StateContext<MainPageStateModel>,
    action: FetchAuctionsActions.FetchAuctionsSuccess
  ) {
    const state = ctx.getState();
    const isPageAlreadyExist = state.auctions.pages.find(
      (page) => page === action.page
    );
    if (action.listData.length) {
      ctx.patchState({
        auctions: {
          ...state.auctions,
          activePage: action.page,
          pages: isPageAlreadyExist
            ? [...state.auctions.pages]
            : [...state.auctions.pages, action.page],
          listData: {
            ...state.auctions.listData,
            [action.page]: action.listData,
          },
          isLoading: false,
          isSuccess: true,
          isFailed: false,
          error: null,
        },
      });
    }
  }

  @Action(FetchAuctionsActions.FetchAuctionsFail)
  fetchAuctionsFail(
    ctx: StateContext<MainPageStateModel>,
    action: FetchAuctionsActions.FetchAuctionsFail
  ) {
    const state = ctx.getState();
    ctx.patchState({
      auctions: {
        ...state.auctions,
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        error: action.error,
      },
    });
  }
}
