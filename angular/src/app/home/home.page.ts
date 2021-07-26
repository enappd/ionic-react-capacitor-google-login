import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Router, NavigationExtras } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isWeb = false;
  constructor(private platform: Platform, private router: Router) { 
    this.isWeb = !this.platform.is('android') && !this.platform.is('ios');
  }
  ionViewDidEnter() {
    if(this.isWeb){
      GoogleAuth.init();
    }
  }
  checkLoggedIn() {
    if (this.isWeb) {
      GoogleAuth.refresh().then((data) => {
        if (data.accessToken) {
          let navigationExtras: NavigationExtras = {
            state: {
              user: { type: 'existing', accessToken: data.accessToken, idToken: data.idToken }
            }
          };
          this.router.navigate(['landing'], navigationExtras);
        }
      }).catch(e => {
        if (e.type === 'userLoggedOut') {
          this.doLogin();
        }
      });
    }else{
      this.doLogin();
    }
  }
  async doLogin() {
    const user = await GoogleAuth.signIn();
    if (user) {
      this.goToHome(user);
    }
  }
  goToHome(user) {
    let navigationExtras: NavigationExtras = { state: { user: user } };
    this.router.navigate(['landing'], navigationExtras);
  }
}
