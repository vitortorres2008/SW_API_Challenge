import { CharactersModel } from './../../assets/model/star-wars.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MoviesModel, ReviewModel, SelectedMovieModel } from 'src/assets/model/star-wars.model';

@Injectable({
  providedIn: 'root',
})
export class StarWarsListService {
  private readonly url = `${environment.SW_API}`;

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<{ results: MoviesModel[] }>(`${this.url}films`).pipe(take(1));
  }

  getMovie(id: number) {
    return this.http.get<SelectedMovieModel>(`${this.url}films/${id}`).pipe(take(1));
  }

  getCharacters() {
    return this.http.get<{ results: CharactersModel[] }>(`${this.url}people`).pipe(take(1));
  }

  getCharactersMovie(url: string): Observable<CharactersModel> {
    return this.http.get<CharactersModel>(url);
  }

  createReview(data: ReviewModel) {
    return this.http.post(this.url, data).pipe(take(1));
  }
}
