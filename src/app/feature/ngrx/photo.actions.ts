import { createAction, props } from "@ngrx/store";
import { Cart } from "../model/cart.model";

export const loadPhotos = createAction('[Photo API] Load Photo');
export const loadPhotoSuccess = createAction('[Photo API] Load Success', props<{photos:Cart[]}>());
export const addtoCart = createAction('[Cart] Add Item',props<{photo:Cart}>());
export const removePhoto = createAction('[Cart] Remove Item', props<{id:number}>());
export const decrementCount = createAction('[Cart] Decrement Count', props<{id:number}>());
export const incrementCount = createAction('[Cart] Increment Count', props<{id:number}>());