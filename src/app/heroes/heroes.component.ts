import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
