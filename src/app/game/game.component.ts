import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Hero } from '../models/Hero';
import { Obstacles } from '../models/Obstacles';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() hero:Hero;
  private obstacles:Obstacles[];
  constructor(private data : DataService) {
    this.obstacles=[{
      type:"obstacle",
      PositionX:5,
      PositionY:5
    },{
      type:"obstacle",
      PositionX:10,
      PositionY:10
    },{
      type:"obstacle",
      PositionX: 2,
      PositionY: 2
    }]
  }

  changePosition(orientation:number){
    if(this.hero.movement>0){
      if(orientation==0){
        if(this.hero.PositionX>0 && this.verifierPosition(this.hero.PositionX-1,this.hero.PositionY)){
          this.hero.PositionX--;
        }
      }
      else if(orientation==1 && this.verifierPosition(this.hero.PositionX,this.hero.PositionY+1)){
        if(this.hero.PositionY<16){
          this.hero.PositionY++;
        }
      }
      else if(orientation==2 && this.verifierPosition(this.hero.PositionX+1,this.hero.PositionY)){
        if(this.hero.PositionX<16){
          this.hero.PositionX++;
        }
      }else if (orientation==3){
        if(this.hero.PositionY>0 && this.verifierPosition(this.hero.PositionX,this.hero.PositionY-1)){
          this.hero.PositionY--;
        }
      }else{
        return;
      }
    this.hero.movement--;
    }
  }

  verifierPosition(x:number,y:number): boolean{
    var  ret:boolean= true;
    	this.obstacles.forEach(obstacle => {
        if(obstacle.PositionX == x && obstacle.PositionY == y){
          ret = false;
        }
      });
      return ret;
  }

  attaquer(){
    console.log("Attaquer");
  }

  finTour(){
    this.hero.movement=5;
  }

  ngOnInit() {
    this.hero.movement=5;
    this.hero.type="hero";
  }

}
