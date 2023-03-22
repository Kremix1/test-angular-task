import { Injectable } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {TransactionInterface} from "../models/transaction-interface";
import {ValidateDataService} from "./validate-data.service";

@Injectable({
  providedIn: 'root'
})
export class InitialDataService {

  public myForm: FormGroup;
  public dataMonth: number[];
  public dataYear: number[];
  constructor(
    private validateData: ValidateDataService
  ) {
    this.myForm = new FormGroup({
      'sendCard': new FormArray([
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
      ]),
      'ownerName': new FormControl('', Validators.required),
      'cardYear': new FormControl(null, Validators.required),
      'cardMonth': new FormControl(null, Validators.required),
      'receiveCard': new FormArray([
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
      ]),
      'amountMoney': new FormControl(null, Validators.required)
    })
    this.dataMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.dataYear = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  }

  public transactions: TransactionInterface[] = [];
  renderTransaction(): void {
    // @ts-ignore
    this.transactions = JSON.parse(localStorage.getItem('transactions')) || []
  }
  saveTransaction(): void {
    if(this.validateData.validateData(this.myForm)){
      let date = new Date()
      this.transactions.push({
        id: Math.floor(Math.random() * 10**10),
        sendCardNumber: this.myForm.controls['sendCard'].value.join(' '),
        receiveCardNumber: this.myForm.controls['receiveCard'].value.join(' '),
        amountMoney: this.myForm.controls['amountMoney'].value,
        date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`,
        cardYear: this.myForm.controls['cardYear'].value,
        cardMonth: this.myForm.controls['cardMonth'].value,
        ownerName: this.myForm.controls['ownerName'].value,
      })
      localStorage.setItem('transactions', JSON.stringify(this.transactions))
      this.myForm.reset()
    }
  }

  deleteTransaction(id: number): void {
    this.transactions = this.transactions.filter(transaction => transaction.id !== id)
    localStorage.setItem('transactions', JSON.stringify(this.transactions))
  }

  repeatTransaction(index: string): void {
    let item = JSON.parse(localStorage.getItem('transactions') || '{}')

    let itemSendCard = item[index].sendCardNumber.split(' ')
    let itemReceiveCard = item[index].receiveCardNumber.split(' ')

    let sendCard = this.myForm.controls['sendCard'] as FormArray
    let receiveCard = this.myForm.controls['receiveCard'] as FormArray

    for(let i = 0; i < 4; i++){
      sendCard['controls'][i].setValue(itemSendCard[i])
      receiveCard['controls'][i].setValue(itemReceiveCard[i])
    }
    this.myForm.controls['cardYear'].setValue(item[index].cardYear)
    this.myForm.controls['cardMonth'].setValue(item[index].cardMonth)
    this.myForm.controls['amountMoney'].setValue(item[index].amountMoney)
    this.myForm.controls['ownerName'].setValue(item[index].ownerName)
  }
}
