import { createReducer, on } from "@ngrx/store";
import { Cart } from "../model/cart.model";
import { loadPhotoSuccess } from "./photo.actions";

export const initialState : Cart[]=[];

export const photoReducer = createReducer(
    initialState,
    on(loadPhotoSuccess,(state,{photos}) => [...photos])
);