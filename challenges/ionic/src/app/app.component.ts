import { AfterViewInit, Component } from '@angular/core';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    private store: Store,
    private platform: Platform,
    private translateService: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setupBackButtonListner();
    });
  }

  setupBackButtonListner() {
    App.addListener('backButton', (data) => {
      if (!data.canGoBack) {
        App.exitApp();
      }
    });
  }

  ngAfterViewInit() {
    this.platform.ready().finally(() => {
      setTimeout(() => SplashScreen.hide());
    });
  }
}
