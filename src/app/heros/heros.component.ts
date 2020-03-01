import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  private heros : object[];
  private heroSelected : object= {};
  private url:string="https://localhost:44355/api/heroes";
  @Output() hero = new EventEmitter<any>();

  constructor(private http :HttpClient) {}

  ngOnInit() {
    let obs = this.http.get(this.url)
    obs.subscribe((response:any)=> {console.log(response.heroes);
                  this.heros=response.heroes;})
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
