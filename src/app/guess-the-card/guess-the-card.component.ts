import { Component, OnInit } from '@angular/core';
import { getCurrentMoney } from '../app.module';
import { setMoney } from '../app.module';
import { isLogged } from '../app.module';
@Component({
  selector: 'app-guess-the-card',
  templateUrl: './guess-the-card.component.html',
  styleUrls: ['./guess-the-card.component.css']
})
export class GuessTheCardComponent implements OnInit {

  constructor() { }

  pick = '';
  money = getCurrentMoney();
  wonAmount = 0;
  hasWon = false;
  hasLost = false;

  ngOnInit(): void {
  }

  addBlueBorder(event: any) {
    this.removeAllBorders();
    event.target.className += ' blue-border';
    this.pick = event.target.id;
  }

  bet() {
  
    const betAmount = +(<HTMLInputElement>document.getElementById('betAmount')).value;
    if (isNaN(betAmount)) {
      alert('Invalid bet amount.');
      return;
    }
    if (betAmount < 10 || betAmount > 100) {
      alert('Please choose bet between 10 and 100.');
      return;
    }
    if (this.money != null)
    if (betAmount > +this.money) {
      alert('You don\'t have enough money!');
      return;
    }
    if (this.pick == '') {
      alert('Please pick a color or a card.')
      return;
    }

    const result = this.getRandomCard();

    if (result[0] == this.pick) {
      const newMoney = betAmount + (Number)(this.money);
      this.updateMoney(newMoney);
      this.wonAmount = betAmount * 2;
      this.hasWon = true;
      this.hasLost = false;
    } else if (result[1] == this.pick) {
      const newMoney = 3 * betAmount + (Number)(this.money);
      this.updateMoney(newMoney);
      this.wonAmount = betAmount * 4;
      this.hasWon = true;
      this.hasLost = false;
    } else {
      const newMoney = (Number)(this.money) - betAmount;
      this.updateMoney(newMoney);
      this.hasWon = false;
      this.hasLost = true;
    }
  }

  removeAllBorders() {
    const red = document.getElementById('red');
    const black = document.getElementById('black');
    const diamond = document.getElementById('diamond');
    const heart = document.getElementById('heart');
    const spade = document.getElementById('spade');
    const club = document.getElementById('club');
    
    
    red?.classList.remove('blue-border');
    black?.classList.remove('blue-border');
    diamond?.classList.remove('blue-border');
    heart?.classList.remove('blue-border');
    spade?.classList.remove('blue-border');
    club?.classList.remove('blue-border');
  }
  getRandomCard() {
    const number = Math.ceil(Math.floor(Math.random() * (4 - 1 + 1) + 1));
    const result = [];
    const theCard = document.getElementById('theCard');
    if (number == 1) {
      result.push('red', 'diamond');
      theCard?.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/125px-Playing_card_diamond_A.svg.png');
    } else if (number == 2) {
      result.push('red', 'heart');
      theCard?.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/125px-Playing_card_heart_A.svg.png');
    } else if (number == 3) {
      result.push('black', 'spade');
      theCard?.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/125px-Playing_card_spade_A.svg.png');
    } else {
      result.push('black', 'club');
      theCard?.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/125px-Playing_card_club_A.svg.png');
    }
    return result;
  }
  
  updateMoney(newMoney: number) {
    localStorage.setItem('money', '' + newMoney);
    setMoney(newMoney);
    this.money = getCurrentMoney();
    document.getElementById('aside')?.click();
  }

  isLogged() {
    return isLogged();
  }
}
