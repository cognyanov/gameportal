import { Component, OnInit } from '@angular/core';
import { isLogged } from '../app.module';
@Component({
  selector: 'app-games-info',
  templateUrl: './games-info.component.html',
  styleUrls: ['./games-info.component.css']
})
export class GamesInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isLogged(): boolean {
    return isLogged();
  }
}
