import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadPhotos, loadPhotoSuccess } from "./photo.actions";
import { map, switchMap } from "rxjs";
import { Cart } from "../model/cart.model";

@Injectable()
export class photoEffects  {
    loadPhotos = createEffect(() => 
    this.action$.pipe(
        ofType(loadPhotos),
        switchMap(()=> 
        this.http.get<Cart[]>('https://jsonplaceholder.typicode.com/photos?_limit=20').pipe(
            map(photos => loadPhotoSuccess({photos}))
        )
        )
    )
    );

    constructor(private action$: Actions, private http: HttpClient) {}
}


