import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber = 0;
  secondNumber = 0;
  math = '';
  result = 0;
  constructor() { }
  onchange(): void{
    switch (this.math) {
      case 'plus':
        this.result = this.firstNumber + this.secondNumber;
        document.getElementById('result').innerHTML = String(this.result);
        break;
      case 'subtraction':
        this.result = this.firstNumber - this.secondNumber;
        document.getElementById('result').innerHTML = String(this.result);
        break;
      case 'multiplication':
        this.result = this.firstNumber * this.secondNumber;
        document.getElementById('result').innerHTML = String(this.result);
        break;
      case 'division':
        this.result = this.firstNumber / this.secondNumber;
        document.getElementById('result').innerHTML = String(this.result);
        break;
    }
  }
  ngOnInit(): void {
  }

}
