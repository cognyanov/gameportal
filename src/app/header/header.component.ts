import { Component, OnInit } from '@angular/core';
import { isLogged } from '../app.module';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return isLogged();
  }
}
