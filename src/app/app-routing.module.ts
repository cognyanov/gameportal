import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesInfoComponent } from './games-info/games-info.component';
import { GuessTheCardComponent } from './guess-the-card/guess-the-card.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'games', component: GamesInfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'guess-the-card', component: GuessTheCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
