import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../shared/heroe.service';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  misHeroes:Heroe[] = []

  constructor(public miServicio: HeroeService) {
    console.log("Constructor de héroes")
  }

  ngOnInit(): void {
    console.log("ngOnInit de Heroes")
    this.misHeroes = this.miServicio.getHeroes()
    console.log(this.misHeroes)
  }

}
