import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isLogged, setLoggedIn } from '../app.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return isLogged();
  }

  logout() {
    localStorage.clear();
    setLoggedIn(false);
    this.router.navigateByUrl('/login');
  }
}
