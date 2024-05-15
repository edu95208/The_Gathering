import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MagicApiService {
  baseUrl: string = 'https://api.magicthegathering.io/v1';
 
  constructor(private http: HttpClient) {}

  searchSets(name: string, block: string) {
    return this.http.get(`${this.baseUrl}/sets`, { params: { name, block } });
  }

  getBoosterCards(setId: string) {
    return this.http.get(`${this.baseUrl}/sets/${setId}/booster`);
  }
}
