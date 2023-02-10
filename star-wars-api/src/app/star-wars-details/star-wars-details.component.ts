import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CharactersModel, SelectedMovieModel } from 'src/assets/model/star-wars.model';
import { StarWarsListService } from '../star-wars-list/star-wars-list.service';

@Component({
  selector: 'app-star-wars-details',
  templateUrl: './star-wars-details.component.html',
  styleUrls: ['./star-wars-details.component.scss'],
})
export class StarWarsDetailsComponent implements OnInit {
  id!: number;
  form!: FormGroup;
  movieImg!: string;
  dataMovie!: SelectedMovieModel;
  dataCharacters!: CharactersModel[];

  constructor(
    private activeRoute: ActivatedRoute,
    private starWarsListService: StarWarsListService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.getMovie(this.id);
    this.getImg(this.id);
    this.createForm();
  }

  private getMovie(id: number) {
    this.starWarsListService
      .getMovie(id)
      .subscribe((result) => {
        this.dataMovie = result;
        this.getCharactersMovie();
      });
  }

  private getImg(id: number) {
    this.movieImg = `../../assets/img/episode_${id}.jpg`;
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      review: ['', Validators.required],
    });
  }

  public onPublishReview() {
    const value = this.form.getRawValue();
    localStorage.setItem('form review', JSON.stringify(value));
    this.starWarsListService.createReview(value).subscribe();
  }

  private getCharactersMovie(): void {
    const charactersRequest = this.dataMovie.characters.map((url: string) => this.starWarsListService.getCharactersMovie(url));
    forkJoin(charactersRequest).subscribe((res: CharactersModel[]) => {
      this.dataCharacters = res;
    });
  }
}
