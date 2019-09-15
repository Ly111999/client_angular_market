import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {Result} from '../model/return';
import {Market} from '../model/market';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private httpClient: HttpClient) {
  }

  API_MARKET = environment.base_api + '/api/v1/market';

  getList(): Observable<Result<Market[]>> {
    return this.httpClient.get(this.API_MARKET).pipe(
      map(response => {
        return response as Result<Market[]>;
      })
    );
  }

  createMarket(market: Market): Observable<Result<Market>> {
    return this.httpClient.post(this.API_MARKET, market).pipe(
      map(response => {
        return response as Result<Market>;
      })
    );
  }
}
