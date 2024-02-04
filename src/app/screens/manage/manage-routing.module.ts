import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { WalletComponent } from './wallet/wallet.component';
import { BankComponent } from './bank/bank.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'transactions',
      },
      {
        path: 'wallet',
        component: WalletComponent,
      },
      {
        path: 'bank',
        component: BankComponent,
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
