import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar/side-bar.component';
import { WalletComponent } from './wallet/wallet.component';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankComponent } from './bank/bank.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [ManageComponent, SideBarComponent, WalletComponent, BankComponent, TransactionsComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSidenavModule
  ],
})
export class ManageModule {}
