import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { usersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
         UsersListComponent,
         UsersUpdateComponent,
         UsersDetailComponent
  ],


  imports: [
    CommonModule,
    usersRoutingModule

  ]
})
export class UsersModule { }
