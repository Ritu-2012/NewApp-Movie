import { Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title$ = this.navbarService.title;

  constructor(private navbarService: NavbarService, public router: Router) { }

  ngOnInit(): void {
  }

}
