import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PaintingItemComponent } from './painting-item/painting-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:PaintingItemComponent},
  {path:'cart', component:CartItemComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingRoutingModule {}
