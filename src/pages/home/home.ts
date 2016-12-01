import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState, INCREMENT, DECREMENT, RESET } from "../../reducers/counter";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
      this.counter = store.select("counter");
  }

  increment() {
      this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
      this.store.dispatch({ type: DECREMENT });
  }

  reset() {
      this.store.dispatch({ type: RESET });
  }

}
