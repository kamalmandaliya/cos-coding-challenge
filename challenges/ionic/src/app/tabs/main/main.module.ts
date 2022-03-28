import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuctionCardsComponentModule } from '../../components/auction-cards/auction-cards.module';
import { MainPage } from './main.page';
import { MainPageRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    AuctionCardsComponentModule,
    SharedModule,
  ],
  declarations: [MainPage],
})
export class MainPageModule {}
