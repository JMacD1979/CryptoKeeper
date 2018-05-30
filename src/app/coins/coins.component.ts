import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { COINS } from '../mock-coins';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})


export class CoinsComponent implements OnInit {
  splash = "All your coin info in one place";
  coins = COINS;

  selectedCoin: Coin;
  
  
  onSelect(coin: Coin): void{
	  
	  this.selectedCoin = coin;
  };
  
  constructor() { }

  ngOnInit() {
  }

}
