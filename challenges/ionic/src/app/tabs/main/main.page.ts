import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll, IonRefresher } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { lastValueFrom, Observable } from 'rxjs';
import { AppStoreModel } from '../../core/store';
import { FetchAuctionsActions } from './main.actions';
import { AuctionsModel } from './main.model';
import { selectAuctions, selectAuctionsIsLoading } from './main.selectors';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;
  @ViewChild(IonRefresher) ionRefresher: IonRefresher;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Select(selectAuctions()) auctions$: Observable<AuctionsModel[]>;
  @Select(selectAuctionsIsLoading()) auctionsIsLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  trackBy(index) {
    return index;
  }

  async doRefresh(event) {
    await lastValueFrom(
      this.store.dispatch(new FetchAuctionsActions.FetchAuctions(1, true))
    );
    await this.ionRefresher.complete();
  }

  async loadDataAuctionsPagination(event) {
    const activePage = this.store.selectSnapshot(
      (state: AppStoreModel) => state.main.auctions.activePage
    );
    await lastValueFrom(
      this.store.dispatch(
        new FetchAuctionsActions.FetchAuctions(activePage + 1)
      )
    );
    await this.infiniteScroll.complete();
  }

  async ngOnInit() {}

  ionViewDidEnter() {
    console.log(new FetchAuctionsActions.FetchAuctions(9));
    const activePage = this.store.selectSnapshot(
      (state: AppStoreModel) => state.main.auctions.activePage
    );
    this.store.dispatch([new FetchAuctionsActions.FetchAuctions(activePage)]);
  }

  ionViewDidLeave() {}
}
