import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersUpdateComponent } from './users-update/users-update.component';


const routes: Routes = [
    { path: 'list', component: UsersListComponent},
    //{ path: 'Create', component: UsersUpdateComponent},
    { path: 'Update/:id', component: UsersUpdateComponent},
    { path: 'detail/:id', component: UsersDetailComponent},
    { path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class usersRoutingModule { }