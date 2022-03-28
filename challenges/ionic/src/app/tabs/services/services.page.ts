import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: 'services.page.html',
  styleUrls: ['services.page.scss'],
})
export class ServicesPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;

  constructor(private navController: NavController) {}

  async ngOnInit() {}

  ionViewDidEnter() {}

  ionViewDidLeave() {}
}
