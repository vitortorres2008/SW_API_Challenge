import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoviesModel } from 'src/assets/model/star-wars.model';
import { SearchingService } from '../searching.service';
import { StarWarsListService } from './star-wars-list.service';

@Component({
  selector: 'app-star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['./star-wars-list.component.scss'],
})
export class StarWarsListComponent implements OnInit, OnDestroy {

  subsMovies!: Subscription;
  movies!: MoviesModel[];
  searchTerm!: string;
  term!: string;

  constructor(
    private starWarsListService: StarWarsListService,
    private searchingService: SearchingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.subsMovies = this.onRefresh();
    this.getSearching();
  }

  onRefresh() {
    return this.starWarsListService.getMovies()
      .pipe(map((resp) => {
        resp.results.map((item) => {
          item.episode_img = `../../assets/img/episode_${item.episode_id}.jpg`;
          return item;
        });
        return resp.results.sort(this.getOrderAscMovies);
      }))
      .subscribe((res) => {
        this.movies = res;
      });
  }

  private getOrderAscMovies(a: MoviesModel, b: MoviesModel) {
    return a.episode_id < b.episode_id ? -1 : 1;
  }

  sendToRoute(id: number) {
    this.router.navigateByUrl('/movie-details/' + id);
  }

  private getSearching() {
    this.searchingService.getSearch().subscribe((value: string) => {
      this.term = value;
    });
  }

  ngOnDestroy(): void {
    this.subsMovies.unsubscribe();
  }
}
