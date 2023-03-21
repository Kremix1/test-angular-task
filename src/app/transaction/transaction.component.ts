import {Component, Input} from "@angular/core";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {InitialDataService} from "../services/initial-data.service";

@Component({
  selector: 'transaction',
  templateUrl: 'transaction.component.html',
  styleUrls: ['transaction.component.scss'],
})
export class TransactionComponent{
  protected myForm: FormGroup
  protected dataMonth: number[];
  protected dataYear: number[];
  constructor(
    protected data: InitialDataService,
  ) {
    this.myForm = this.data.myForm
    this.dataMonth = this.data.dataMonth
    this.dataYear = this.data.dataYear
  }

  getFormsControls(type: string): FormArray{
    switch (type){
      case 'receiveCard':
        return this.myForm.controls['receiveCard'] as FormArray;
      default:
        return this.myForm.controls['sendCard'] as FormArray;
    }
  }
}
