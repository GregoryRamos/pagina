import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';
import { CardsUpdateComponent } from './cards-update/cards-update.component';
import { cardsRoutingModule } from './cards-routing.module';



@NgModule({
  declarations: [
    CardsListComponent,
    CardsDetailComponent,
    CardsUpdateComponent
  ],
  imports: [
    CommonModule,
    cardsRoutingModule
  ]
})
export class CardsModule { }
