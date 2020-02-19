import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  private heros : object[];
  private heroSelected : object= {};
  @Output() hero = new EventEmitter<any>();

  constructor() { 
    this.heros=[
      {
          "Epee": null,
          "Id": 1,
          "Nom": "Harry Potter",
          "Avatar": "https://i.ibb.co/4sDH6tx/3.jpg",
          "PositionY": 0,
          "PositionX": 0,
          "PointsDeVie": 0
      },
      {
          "Epee": null,
          "Id": 2,
          "Nom": "captin majid",
          "Avatar": "https://i.ibb.co/w6B1yKK/2.jpg",
          "PositionY": 0,
          "PositionX": 0,
          "PointsDeVie": 0
      }
    ]
  }

  ngOnInit() {
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
