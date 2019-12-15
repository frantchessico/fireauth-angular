import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
logOut() {
  this.authService.logOut();
}
}
