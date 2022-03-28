/* eslint-disable @typescript-eslint/no-namespace */
import { apiGetAllAuctions } from './main.constant';
import { AuctionsModel } from './main.model';

/* Auctions Actions */
export namespace FetchAuctionsActions {
  export class FetchAuctions {
    static readonly type = '[Main Tab] Fetch auctions';
    constructor(
      public page: number,
      public isRefresh = false,
      public api: string = apiGetAllAuctions()
    ) {
      this.api = apiGetAllAuctions(this.page);
    }
  }

  export class FetchAuctionsSuccess {
    static readonly type = '[Main Tab] Fetch auctions success';
    constructor(public listData: AuctionsModel[], public page: number) {}
  }

  export class FetchAuctionsFail {
    static readonly type = '[Main Tab] Fetch auctions fail';
    constructor(public error: string) {}
  }
}
