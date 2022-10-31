import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'users',  loadChildren: () => import('./page/users/users.module').then(m => m.UsersModule)},
    { path: 'cards',  loadChildren: () => import('./page/cards/cards.module').then(m => m.CardsModule)},
    { path: 'account',  loadChildren: () => import('./page/account/account.module').then(m => m.AccountModule)},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
