import { Component, Input, OnInit } from '@angular/core';
import { AuctionsModel } from '../../tabs/main/main.model';

@Component({
  selector: 'app-auction-cards',
  templateUrl: './auction-cards.component.html',
  styleUrls: ['./auction-cards.component.scss'],
})
export class UsersPostsComponent implements OnInit {
  @Input() isLoading = true;
  @Input() auctions: AuctionsModel[];

  constructor() {}

  trackByPost(index) {
    return index;
  }

  ngOnInit() {}
}
