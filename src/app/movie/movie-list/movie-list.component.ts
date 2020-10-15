import { NavbarService } from './../../navbar/services/navbar.service';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.models';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]>;
  constructor(private movieService: MovieService, private navbarService : NavbarService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMoviesFromHttp();
    this.navbarService.title.next('MovieNight');
  }

}
