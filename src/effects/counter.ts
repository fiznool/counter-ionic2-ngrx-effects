import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import "rxjs/add/operator/map";

import { RESET, RESET_SUCCESS } from '../reducers/counter';

@Injectable()
export class CounterEffects {
    constructor(
        private actions$: Actions
    ) { }

    @Effect() reset$ = this.actions$
        .ofType(RESET)
        .map(() => ({ type: RESET_SUCCESS }));
}
