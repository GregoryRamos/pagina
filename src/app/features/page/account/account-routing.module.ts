import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountUpdateComponent } from './account-update/account-update.component';


//la ruta que le das cuando haces click

const routes: Routes = [
    { path: 'list', component: AccountListComponent},
    //{ path: 'Create', component: accountUpdateComponent},
    { path: 'Update/:id', component: AccountUpdateComponent},
    { path: 'detail/:id', component: AccountDetailComponent},
    { path: '', redirectTo: 'list', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class accountRoutingModule { }