import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
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
  dataMovie!: any;
  dataCharacters: any[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private starWarsListService: StarWarsListService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.getMovie(this.id);
    this.getImg(this.id);
    this.createForm();
  }

  private getMovie(id: number) {
    this.starWarsListService
      .getMovie(id)
      .pipe(
        tap((result) => {
          this.dataMovie = result;
          this.getCharactersMovie();
        })
      )
      .subscribe();
  }

  private getImg(id: number) {
    if (id == 1) {
      this.movieImg = '../../assets/img/episode_4.jpg';
    }
    if (id == 2) {
      this.movieImg = '../../assets/img/episode_5.jpg';
    }
    if (id == 3) {
      this.movieImg = '../../assets/img/episode_6.jpg';
    }
    if (id == 4) {
      this.movieImg = '../../assets/img/episode_1.jpg';
    }
    if (id == 5) {
      this.movieImg = '../../assets/img/episode_2.jpg';
    }
    if (id == 6) {
      this.movieImg = '../../assets/img/episode_3.jpg';
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      review: ['', Validators.required],
    });
  }

  public onPublish() {
    const model = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      review: this.form.get('review')?.value,
    };
    localStorage.setItem('form review', JSON.stringify(model));
    this.starWarsListService.createReview(model).subscribe();
  }

  private getCharactersMovie(): void {
    this.dataMovie?.characters.forEach((url: any) => {
      this.starWarsListService
        .getCharactersMovie(url)
        .subscribe((result: any) => {
          this.dataCharacters.push(result);
        });
    });
  }
}
