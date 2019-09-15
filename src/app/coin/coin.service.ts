import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {Result} from '../model/return';
import {Coin} from '../model/coin';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private httpClient: HttpClient) {
  }

  API_COIN = environment.base_api + '/api/v1/coin';

  getList(): Observable<Result<Coin[]>> {
    return this.httpClient.get(this.API_COIN).pipe(
      map(response => {
        return response as Result<Coin[]>;
      })
    );
  }

  createCoin(coin: Coin): Observable<Result<Coin>> {
    return this.httpClient.post(this.API_COIN, coin).pipe(
      map(response => {
        return response as Result<Coin>;
      })
    );
  }

  findByName(name: string): Observable<Result<Coin[]>> {
    return this.httpClient.get(`${this.API_COIN}/${name}`).pipe(
      map(response => {
        return response as Result<Coin[]>;
      })
    );
  }

  findByMarketId(marketId: number): Observable<Result<Coin[]>> {
    return this.httpClient.get(`${this.API_COIN}/marketId/${marketId}`).pipe(
      map(response => {
        return response as Result<Coin[]>;
      })
    );
  }
}
