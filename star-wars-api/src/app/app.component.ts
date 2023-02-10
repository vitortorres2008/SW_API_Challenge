import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchingService } from '../app/searching.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-api';

  constructor(private router: Router,
    private searchingService: SearchingService) { }

  onBack() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['sw-list']);
  }

  public setSearching(value: string) {
    this.searchingService.setSeaching(value);
  }
}
