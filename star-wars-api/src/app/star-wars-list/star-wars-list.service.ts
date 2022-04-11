import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delay, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsListService {
  private readonly url = `${environment.SW_API}`;

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>(`${this.url}films`).pipe(delay(2000));
  }

  getMovie(id: number) {
    return this.http.get<any>(`${this.url}films/${id}`).pipe(take(1));
  }

  getCharacters() {
    return this.http.get<any>(`${this.url}people`).pipe(take(1));
  }

  getCharactersMovie(url: string): Observable<any> {
    return this.http.get(url);
  }

  createReview(data: any) {
    return this.http.post(this.url, data).pipe(take(1));
  }
}
