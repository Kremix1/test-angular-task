import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TransactionModule} from "./transaction/transaction.module";
import {HistoryModule} from "./history/history.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TransactionModule,
    HistoryModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
