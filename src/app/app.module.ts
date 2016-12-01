import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { counterReducer } from '../reducers/counter';
import { CounterEffects } from '../effects/counter';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({ counter: counterReducer }),
    EffectsModule.run(CounterEffects)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
