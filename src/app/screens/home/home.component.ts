import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  outputs: number[] = [];
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      const number = Math.random();
      this.outputs.push(number);
    }
  }

  get totalValue(): number {
    return this.outputs.reduce((prev: number, cur: number) => prev + cur);
  }
}
