import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  user: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      let data = this.router.getCurrentNavigation().extras.state;
      if (data) {
        if (data.user.type === 'existing') {
          let token = data.user.accessToken;
          this.getUserProfileData(token);
        }
        else {
          this.user = data.user;
          console.log(this.user);
        }
      }
    });
  }
  signOut() {
    GoogleAuth.signOut().then(() => {
      console.log('Logged out');
      this.router.navigate(['home']);
    });
  }
  async getUserProfileData(token) {
    const options = {
      url: `https://www.googleapis.com/oauth2/v2/userinfo?key=AIzaSyBVD7iI39rH0-GCuVknv80cscV8CLPZzUk&oauth_token=${token}`,
      headers:{'Content-Type': 'application/json'}
    };
    const response = await Http.request({ ...options, method: 'GET' });
    this.user = response.data;
  }

}
