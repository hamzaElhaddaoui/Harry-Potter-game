import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  private heros : Hero[];
  private heroSelected : object= {};
  private urlHeroes:string="https://localhost:44355/api/heroes";
  private urlEpee:string="https://localhost:44355/api/epees";
  @Output() hero = new EventEmitter<any>();

  constructor(private http :HttpClient) {}

  ngOnInit() {
    let obs = this.http.get(this.urlHeroes)
    obs.subscribe((response:any)=> {console.log(response.heroes);
                  this.heros=response.heroes;
                this.http.get(this.urlEpee).subscribe((responseEpee:any) => {
                  console.log(responseEpee.epees.length);
                  // this.heros=responseEpee

                  for (let index = 0; index < responseEpee.epees.length; index++) {
                    
                    this.heros[index].degat= responseEpee.epees[index].Degats;
                    this.heros[index].portee= responseEpee.epees[index].Portee;
                    console.log(this.heros[index].degat);

                  }
                })
                })
  }

  setHero(hero:any){
    this.heroSelected=hero;
  }

  selectHero(){
    if(this.heroSelected!=null){
      this.hero.emit(this.heroSelected)
    }
  }

}
