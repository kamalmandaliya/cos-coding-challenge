import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { ApiService } from '../../../services/api/api.service';
import { AuthAction } from '../../../core/auth-guard/auth-guard.actions';
import { catchError, map, tap } from 'rxjs';
import { AlertService } from '../../../services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: FormGroup;

  constructor(
    private showMessage: AlertService,
    private apiService: ApiService,
    private store: Store,
    private navController: NavController,
    private platform: Platform
  ) {}
  onLogin() {
    const email = this.login.value.email;
    const password = this.login.value.password;
    return this.apiService
      .put('https://api-core-dev.caronsale.de/api/v1/authentication/' + email, {
        password,
        meta: 'string',
      })
      .pipe(
        map((results) => results),
        catchError(async (error) => this.showAlertMessage(error))
      )
      .subscribe((data) => {
        if (
          data.authenticated === true &&
          data.privileges === '{SALESMAN_USER}'
        ) {
          this.store.dispatch(
            new AuthAction.Login(data.userId, data.token, data.authenticated)
          );
        } else {
          this.showAlertMessage(data);
        }
      });
  }
  async showAlertMessage(data) {
    console.log(data);
    const alert = await this.showMessage.presentAlert({
      header: 'Alert',
      subHeader: data.error.msgKey,
      message: data.error.message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('buyer-challenge@caronsale.de', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('Test123.', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
      ]),
    });
  }
}
