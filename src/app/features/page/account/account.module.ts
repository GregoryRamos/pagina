import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { accountRoutingModule } from './account-routing.module';

// pa defini componente

@NgModule({
  declarations: [
    AccountListComponent,
    AccountDetailComponent,
    AccountUpdateComponent
  ],

  imports: [
    CommonModule,
    accountRoutingModule
  ]
})
export class AccountModule { }
