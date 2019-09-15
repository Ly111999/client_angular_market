import { Component, OnInit } from '@angular/core';
import {MarketService} from '../market.service';
import {map} from 'rxjs/operators';
import {Market} from '../../model/market';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-market',
  templateUrl: './list-market.component.html',
  styleUrls: ['./list-market.component.css']
})
export class ListMarketComponent implements OnInit {
  markets: Observable<Market[]>;
  constructor(private marketService: MarketService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.markets = this.marketService.getList().pipe(
      map(response => {
        return response.metaData;
      })
    );
  }

}
