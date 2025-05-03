import { ActionReducerMap } from "@ngrx/store";
import { Cart } from "../../model/cart.model";
import { photoReducer } from "../photo.reducer";
import { cartReducer } from "../cart.reducer";


export interface PaintingFeatureState {
  photo: Cart[];
  cart: Cart[];
}

export const reducers: ActionReducerMap<PaintingFeatureState> = {
  photo: photoReducer,
  cart: cartReducer
};