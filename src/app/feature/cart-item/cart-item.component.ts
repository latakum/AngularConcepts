import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/app.state';
import { decrementCount, incrementCount, removePhoto } from '../ngrx/photo.actions';
import { PaintingFeatureState } from '../ngrx/reducers';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  cart$!: Observable<Cart[]>;
  isOpen = false;

  constructor(private store: Store<{ paintingFeature: PaintingFeatureState }>) {
    this.cart$ = this.store.select(state => state.paintingFeature.cart);
  }

  increment(id: number) {
    this.store.dispatch(incrementCount({ id }));
  }

  decrement(id: number) {
    this.store.dispatch(decrementCount({ id }));
  }

  remove(id: number) {
    this.store.dispatch(removePhoto({ id }));
  }

  checkout() {
    alert('Order placed successfully!');
  }

  toggleCart() {
    this.isOpen = !this.isOpen;
  }
}
function removeFromCart(arg0: { id: number; }): any {
  throw new Error('Function not implemented.');
}

