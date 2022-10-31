import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsUpdateComponent } from './cards-update/cards-update.component';


const routes: Routes = [
    { path: 'list', component: CardsListComponent},
    //{ path: 'Create', component: accountUpdateComponent},
    { path: 'Update/:id', component: CardsUpdateComponent},
    { path: 'detail/:id', component: CardsDetailComponent},
    { path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class cardsRoutingModule { }