import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionComponent} from "./transaction/transaction.component";
import {HistoryComponent} from "./history/history.component";

const routes: Routes = [
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule),
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then(m => m.HistoryModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
