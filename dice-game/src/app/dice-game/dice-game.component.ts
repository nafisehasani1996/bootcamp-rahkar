import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-game',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './dice-game.component.html',
  styleUrls: ['./dice-game.component.scss']
})
export class DiceGameComponent implements OnInit {
  dice1!: number;
  dice2!: number;
  total!: number;

  constructor() { }

  ngOnInit(): void {
    this.rollDice();
  }

  rollDice(): void {
    this.dice1 = this.getRandomNumber();
    this.dice2 = this.getRandomNumber();
    this.total = this.dice1 + this.dice2;
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}