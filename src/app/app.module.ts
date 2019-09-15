import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateMarketComponent} from './market/create-market/create-market.component';
import {ListMarketComponent} from './market/list-market/list-market.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CreateCoinComponent } from './coin/create-coin/create-coin.component';
import { ListCoinComponent } from './coin/list-coin/list-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMarketComponent,
    ListMarketComponent,
    CreateCoinComponent,
    ListCoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'coin/list', component: ListCoinComponent},
      {path: 'coin/add', component: CreateCoinComponent},
      {path: 'market/list', component: ListMarketComponent},
      {path: 'market/add', component: CreateMarketComponent}]
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
