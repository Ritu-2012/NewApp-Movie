import { NavbarService } from './../../navbar/services/navbar.service';
import { MovieService } from './../services/movie.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  id: number;
  movie: Movie;
  movieSub$: Subscription;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private navbarService: NavbarService){}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movieFromHttp(this.id).subscribe(movie => {
      this.movie = movie;
      this.navbarService.title.next(movie.name);
    });
  }

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }

}
