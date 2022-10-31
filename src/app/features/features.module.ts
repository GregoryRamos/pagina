import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './page/home/home.component';
import { MenuCardComponent } from './page/home/menu-card/menu-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    MenuCardComponent,
  
  ],

  exports: [
    HomeComponent

  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule

  ]
  
})
export class FeaturesModule { }
