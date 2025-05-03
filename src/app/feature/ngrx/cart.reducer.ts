import { createReducer, on } from "@ngrx/store";
import { Cart } from "../model/cart.model";
import { addtoCart, decrementCount, incrementCount, removePhoto } from "./photo.actions";

export const initialCart : Cart[] = [];

export const cartReducer = createReducer(
    initialCart,
    on(addtoCart, (state, {photo}) => {
    const existingPhoto = state.find(p => p.id == photo.id);   
    if(existingPhoto){
        return state.map(p => p.id == photo.id ? {...p, count : (p.count || 1) +1 }: p);
    }
    else{
        return [...state, {...photo, count : 1}]
    }
    }),

    on(removePhoto, (state, {id}) => state.filter(x => x.id !== id)),
    on(decrementCount,(state,{id}) => state.map(p => p.id == id && p.count && p.count > 1 ? {...p, count: p.count-1}:p)),
    on(incrementCount, (state, {id}) => state.map(p => p.id == id ? {...p, count: (p.count || 1) + 1}:p))
);