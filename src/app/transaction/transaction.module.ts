import {NgModule} from "@angular/core";
import {TransactionComponent} from "./transaction.component";
import {TransactionRoutingModule} from "./transaction-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    TransactionComponent
  ]
})

export class TransactionModule {

}
