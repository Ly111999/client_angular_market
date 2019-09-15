import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Coin} from '../../model/coin';
import {Market} from '../../model/market';
import {MarketService} from '../../market/market.service';
import {CoinService} from '../coin.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.css']
})
export class ListCoinComponent implements OnInit {
  coins: Observable<Coin[]>;
  markets: Observable<Market[]>;
  market: any;
  name: '';

  constructor(
    private marketService: MarketService,
    private coinService: CoinService
  ) {
  }

  ngOnInit() {
    this.getListCoin();
    this.getListMarket();
  }

  getListCoin() {
    this.coins = this.coinService.getList().pipe(
      map(response => {
        return response.metaData;
      })
    );
  }

  getListMarket() {
    this.markets = this.marketService.getList().pipe(
      map(response => {
        return response.metaData;
      })
    );
  }

  findByName() {
    this.coins = this.coinService.findByName(this.name).pipe(
      map(response => {
        return response.metaData;
      })
    );
  }

  findByMarketId() {
    this.coins = this.coinService.findByMarketId(this.market).pipe(
      map(response => {
        return response.metaData;
      })
    );
  }
}
