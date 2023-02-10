import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchingService } from 'src/app/searching.service';
import { CharactersModel } from 'src/assets/model/star-wars.model';
import { StarWarsListService } from '../star-wars-list.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {

  characters!: CharactersModel[];
  subsCharacters!: Subscription;
  searchTerm!: string;
  term!: string;

  constructor(private starWarsListService: StarWarsListService, private searchingService: SearchingService) { }

  ngOnInit(): void {
    this.subsCharacters = this.onRefresh();
    this.getSearching();
  }

  onRefresh() {
    return this.starWarsListService.getCharacters().subscribe((res) => {
      this.characters = res.results;
    });
  }

  private getSearching() {
    this.searchingService.getSearch().subscribe((value: string) => {
      this.term = value;
    });
  }

  ngOnDestroy(): void {
    this.subsCharacters.unsubscribe();
  }
}
