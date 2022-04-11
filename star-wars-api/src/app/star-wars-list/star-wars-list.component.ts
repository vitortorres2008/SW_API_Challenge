import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchingService } from '../searching.service';
import { StarWarsListService } from './star-wars-list.service';

@Component({
  selector: 'app-star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['./star-wars-list.component.scss'],
})
export class StarWarsListComponent implements OnInit, OnDestroy {

  subsMovies!: Subscription;
  movies!: any;
  searchTerm!: string;
  term!: string;

  constructor(
    private starWarsListService: StarWarsListService,
    private router: Router,
    private searchingService: SearchingService
    ) {}

  ngOnInit(): void {
    this.subsMovies = this.onRefresh();
    this.getSearching();
  }

  onRefresh() {
    return this.starWarsListService.getMovies().subscribe((res) => {
      this.movies = this.getCards(res.results);
    });
  }

  private getCards(result: any) {
    let { ...ep_4 } = result;
    ep_4 = { ...ep_4[0], episode_img: '../../assets/img/episode_4.jpg', episode_id: 1 };
    let { ...ep_5 } = result;
    ep_5 = { ...ep_5[1], episode_img: '../../assets/img/episode_5.jpg', episode_id: 2 };
    let { ...ep_6 } = result;
    ep_6 = { ...ep_6[2], episode_img: '../../assets/img/episode_6.jpg', episode_id: 3 };
    let { ...ep_1 } = result;
    ep_1 = { ...ep_1[3], episode_img: '../../assets/img/episode_1.jpg', episode_id: 4 };
    let { ...ep_2 } = result;
    ep_2 = { ...ep_2[4], episode_img: '../../assets/img/episode_2.jpg', episode_id: 5 };
    let { ...ep_3 } = result;
    ep_3 = { ...ep_3[5], episode_img: '../../assets/img/episode_3.jpg', episode_id: 6 };
    return [ep_1, ep_2, ep_3, ep_4, ep_5, ep_6];
  }

  sendToRoute(id: number) {
    this.router.navigateByUrl('/movie-details/'+id)
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
