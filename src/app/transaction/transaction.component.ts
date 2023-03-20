import {Component, Input} from "@angular/core";

@Component({
  selector: 'transaction',
  templateUrl: 'transaction.component.html',
  styleUrls: ['transaction.component.scss'],
})
export class TransactionComponent{
  protected dataMonth: number[];
  protected dataYear: number[];

  protected sendCardNumber: string[];
  protected receiveCardNumber: string[];
  protected CardMonth: number;
  protected CardYear: number;
  constructor() {
    this.dataMonth = [1,2,3,4,5,6,7,8,9,10,11,12];
    this.dataYear = [2023, 2024, 2025, 2026, 2027];
    this.sendCardNumber = ['','','',''];
    this.receiveCardNumber = ['','','',''];
    this.CardMonth = 5;
    this.CardYear = 2024;
  }

  onInput = (event: Event, index: number) => {
    this.sendCardNumber[index] = (<HTMLInputElement>event.target).value
  }
  onInputRec = (event: Event, index: number) => {
    this.receiveCardNumber[index] = (<HTMLInputElement>event.target).value
  }
  sendMoney = () => {
    for(let i = 0; i < this.sendCardNumber.length; i++){
      if(isNaN(Number(this.sendCardNumber[i]))){
        alert('Номер карты должен состоять из чисел')
        return;
      }
      if (this.sendCardNumber[i] === ''){
        alert('Заполните все поля')
        return
      }
    }
  }
  receiveData = () => {
    console.log(this.sendCardNumber)
    console.log({dataMonth: this.CardMonth, dataYear: this.CardYear, sendCard: this.sendCardNumber.join(' '), receiveCard: this.receiveCardNumber.join(' ')})
  }
}
