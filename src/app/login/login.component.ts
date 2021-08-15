import { Component, OnInit } from '@angular/core';
import Backendless from 'backendless';
import { isLogged, setLoggedIn, getMoney } from '../app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  loginURL = 'https://api.backendless.com/895B12E6-5352-00DE-FF30-4C902976EF00/692D3EDD-F2B8-4007-92A0-ABA28A5A52A2/users/login';
  failedLogin = false;

  ngOnInit(): void {
    const APP_ID = '895B12E6-5352-00DE-FF30-4C902976EF00';
    const API_KEY = '692D3EDD-F2B8-4007-92A0-ABA28A5A52A2';
    
    Backendless.initApp(APP_ID, API_KEY);
  }

  async login () {
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    
    const result = await this.loginUser(username, password);
    
    if(result.ok) {
      setLoggedIn(true);
      result.json().then((result) => {
        localStorage.setItem('user-token', result['user-token']);
        localStorage.setItem('ownerId', result['ownerId']);
        localStorage.setItem('username', result['username']);
        localStorage.setItem('money', result['money']);
        document.getElementById('aside')?.click();
      });
      this.router.navigateByUrl('/home');

    } else {
      this.failedLogin = true;
    }
  }

  async loginUser(username: string, password: string): Promise<Response> {
    return await fetch(this.loginURL, {
      method: 'POST',
      body: JSON.stringify({
        login: username,
        password: password
      }),
      headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }
}
