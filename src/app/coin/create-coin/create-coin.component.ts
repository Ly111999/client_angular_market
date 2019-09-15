import {Component, OnInit} from '@angular/core';
import {Coin} from '../../model/coin';
import {CoinService} from '../coin.service';
import {MarketService} from '../../market/market.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Market} from '../../model/market';

@Component({
  selector: 'app-create-coin',
  templateUrl: './create-coin.component.html',
  styleUrls: ['./create-coin.component.css']
})
export class CreateCoinComponent implements OnInit {
  coin: Coin = {
    name: '',
    lastPrice: '',
    baseAsset: '',
    quoteAsset: '',
    volumn24h: '',
    marketId : 1
  };
  markets: Observable<Market[]>;
  constructor(private coinService: CoinService, private marketService: MarketService) {}

  ngOnInit() {
    this.getListMarket();
  }

  onSubmit() {
    this.coinService.createCoin(this.coin).subscribe();
  }

  getListMarket() {
    this.markets = this.marketService.getList().pipe(
      map(response => {
        return response.metaData;
      })
    );
  }
}
