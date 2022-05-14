import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../shared/heroe.service';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreH:string = ""
  indice:number = 0
  miHeroe: Heroe = {
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: "",
  }

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.nombreH = params['nombreH']
      this.indice = heroeService.searchUnHeroe(this.nombreH)
      console.log(this.indice)

      if(this.indice != -1) {
        this.miHeroe = heroeService.getUnHeroe(this.indice)
      } else if(this.indice == -1) {
        setTimeout(() => {
          console.log("hola")
          location.href = '/heroes'
        }, 3000)
      }
    })
  }

  ngOnInit(): void {
  }

}
