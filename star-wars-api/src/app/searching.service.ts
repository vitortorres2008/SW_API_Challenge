import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchingService {
  private searchText = new Subject();

  constructor() { }

  public setSeaching(value: string) {
    this.searchText.next(value);
  }
  public getSearch(): Subject<string> {
    return this.searchText.asObservable() as Subject<string>;
  }
}
