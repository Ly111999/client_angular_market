import {Component, OnInit} from '@angular/core';
import {MarketService} from '../market.service';
import {Market} from '../../model/market';

@Component({
  selector: 'app-create-market',
  templateUrl: './create-market.component.html',
  styleUrls: ['./create-market.component.css']
})
export class CreateMarketComponent implements OnInit {
  market: Market = {
    name: '',
    description: '',
  };

  constructor(private marketService: MarketService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.marketService.createMarket(this.market).subscribe();
  }
}
