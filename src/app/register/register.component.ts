import { Component, OnInit } from '@angular/core';
import Backendless from 'backendless';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }
  registerURL = 'https://api.backendless.com/895B12E6-5352-00DE-FF30-4C902976EF00/692D3EDD-F2B8-4007-92A0-ABA28A5A52A2/users/register';

  ngOnInit(): void {
    const APP_ID = '895B12E6-5352-00DE-FF30-4C902976EF00';
    const API_KEY = '692D3EDD-F2B8-4007-92A0-ABA28A5A52A2';
    
    Backendless.initApp(APP_ID, API_KEY);
  }

  asd(): void {
    console.log('asd')
  }
  async register(): Promise<void> {
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
   
    const response = await this.registerUser(username, password);
  
    if(response.ok) {
      console.log('successfuly registered user.');

      this.router.navigateByUrl('/login');
    } else {
      console.log('NOT OK');
    }
  }

    async registerUser(username: string, password: string): Promise<Response> {
      return await fetch(this.registerURL, {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {'Content-Type': 'application/json; charset=UTF-8'} });
    }
}
