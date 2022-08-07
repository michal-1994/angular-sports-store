import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';

registerLocaleData(localePL, 'pl');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'store', component: StoreComponent
      },
      {
        path: 'cart', component: CartDetailComponent
      },
      {
        path: 'checkout', component: CheckoutComponent
      },
      {
        path: '**', redirectTo: './store'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
