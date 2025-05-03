import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart.model';
import { AppState } from '../ngrx/app.state';
import { Store } from '@ngrx/store';
import { addtoCart, loadPhotos } from '../ngrx/photo.actions';
import { PaintingFeatureState } from '../ngrx/reducers';

@Component({
  selector: 'app-photo-cart',
  templateUrl: './photo-cart.component.html',
  styleUrls: ['./photo-cart.component.scss']
})
export class PhotoCartComponent {
 photos$!: Observable<Cart[]>;

  constructor(private store: Store<{ paintingFeature: PaintingFeatureState }>) {}

  ngOnInit() {
    this.store.dispatch(loadPhotos());
    this.photos$ = this.store.select(state => state.paintingFeature.photo);
  }

  addToCart(photo: Cart) {
    this.store.dispatch(addtoCart({ photo }));
  }
}
