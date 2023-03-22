import {Component, OnInit} from "@angular/core";
import {TransactionInterface} from "../models/transaction-interface";
import {InitialDataService} from "../services/initial-data.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss'],
})
export class HistoryComponent {
  constructor(
    protected dataActions: InitialDataService,
  ) {}

  ngOnInit() {
    this.dataActions.renderTransaction()
  }
}
