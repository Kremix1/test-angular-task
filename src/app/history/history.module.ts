import {NgModule} from "@angular/core";
import {HistoryComponent} from "./history.component";
import {HistoryRoutingModule} from "./history-routing.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HistoryRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule {

}
