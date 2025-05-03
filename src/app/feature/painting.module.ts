import { effect, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingRoutingModule } from './painting-routing.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PaintingItemComponent } from './painting-item/painting-item.component';
import { StoreModule } from '@ngrx/store';
import { photoReducer } from './ngrx/photo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { photoEffects } from './ngrx/photo.effects';
import { cartReducer } from './ngrx/cart.reducer';
import { reducers } from './ngrx/reducers';
import { PhotoCartComponent } from './photo-cart/photo-cart.component';


@NgModule({
  declarations: [
    CartItemComponent,
    PaintingItemComponent,
    PhotoCartComponent,
  ],
  imports: [
    CommonModule,
    PaintingRoutingModule,
    StoreModule.forFeature('paintingFeature', reducers),
   
    EffectsModule.forFeature([photoEffects])
  ],
})
export class PaintingModule { }
