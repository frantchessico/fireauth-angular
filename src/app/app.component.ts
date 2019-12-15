import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'FranciscoInoquePortfolio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public authService: AuthService) {
  }

  logout() {
    this.authService.logOut();
  }






}
