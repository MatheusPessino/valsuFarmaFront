import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavBarModule
  ], 
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
