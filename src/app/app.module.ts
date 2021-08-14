import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GamesInfoComponent } from './games-info/games-info.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GuessTheCardComponent } from './guess-the-card/guess-the-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GamesInfoComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    GuessTheCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    userData: object = {
    isLogged: false
  }
 }
 var getMoneyURL = 'https://api.backendless.com/895B12E6-5352-00DE-FF30-4C902976EF00/692D3EDD-F2B8-4007-92A0-ABA28A5A52A2/users/';

export var userData = {
  isLogged: false,
  money: getMoney()
}

 export function isLogged(): boolean {
   return userData.isLogged;
 }

 export function setLoggedIn(isLoggedIn: boolean) {
   userData.isLogged = isLoggedIn;
 }

 export function getToken() {
   return localStorage.getItem('user-token');
 }
export function getOwnerId() {
  return localStorage.getItem('ownerId');
}
 export async function getMoney() {
   const token = getToken();
   if (token != undefined && token != null) {
   const result = await fetch(getMoneyURL + getOwnerId(), {
      method: 'GET',
      headers: {'Content-Type': 'application/json; charset=UTF-8', 'user-token': token} });
      result.json().then((res) => localStorage.setItem('money', res['money']));
      return localStorage.getItem('money');
   }
   return 0;
 }

 export function getCurrentMoney() {
   return localStorage.getItem('money');
 }

 export async function setMoney(money: number) {
  await fetch('https://api.backendless.com/895B12E6-5352-00DE-FF30-4C902976EF00/692D3EDD-F2B8-4007-92A0-ABA28A5A52A2/users/' + getOwnerId(), {
    method: 'PUT',
    body: JSON.stringify({
      money
    }),
    headers: {'Content-Type': 'application/json; charset=UTF-8'} });
 }