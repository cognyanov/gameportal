import { Component, OnInit } from '@angular/core';
import { getToken } from '../app.module';
import { isLogged, getCurrentMoney, getUsername } from '../app.module';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }  
  myMoney = getCurrentMoney();
  username = getUsername();

  getMoneyURL = 'https://api.backendless.com/895B12E6-5352-00DE-FF30-4C902976EF00/692D3EDD-F2B8-4007-92A0-ABA28A5A52A2/users/';
  token = getToken();

  ngOnInit(): void {
  }

  ngAfterInit(): void {
  }

  handleClick() {
    this.myMoney = getCurrentMoney();
    this.username = getUsername();
  }

  isLogged(): boolean {
    return isLogged();
  }

}
