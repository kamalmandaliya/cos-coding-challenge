import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { TabListModel, TabModel } from './tabs.model';
import { selectTabsList } from './tabs.selectors';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  @Select(selectTabsList()) tabs$: Observable<TabModel[]>;

  activeTab: TabListModel = 'main';
  constructor() {}

  trackByTab(index: number) {
    return index;
  }

  tabChanged(event) {
    this.activeTab = event.tab;
  }

  tabClicked(tab) {
    console.log('previous tab', this.activeTab);
    console.log('next tab', tab.id);
  }
}
