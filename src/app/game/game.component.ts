import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { Hero } from '../models/Hero';
import { Obstacles } from '../models/Obstacles';
import { Monstre } from '../models/Monstre';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() hero:Hero;
  private eventLog:any;
  private obstacles:Obstacles[];
  private monstres:Monstre[];
  private attaque:any;
  private isHeroKilled:boolean=false;
  private attaqueTour:boolean=false;
  private gourdins:any;
  private url:string="https://localhost:44355/api/game";

  constructor(private data : DataService, private http:HttpClient) {}

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
    this.attaque = {"x":this.hero.PositionX,
                    "y":this.hero.PositionY};
    this.attaqueTour=true;
    console.log(this.attaque);
  }

  finTour(){
    this.hero.movement=5;
    if(this.attaqueTour==false){
      this.attaque={
        "x": -1,
        "y": -1
      }
      console.log("No attaque");
    }
    this.attaqueTour=false;
    let heroPos={"x": this.hero.PositionX,
                 "y": this.hero.PositionY};

    
    this.http.post(this.url+"/fintour",{
      hero:heroPos,
      attack:this.attaque
    }).subscribe((response:any) => {
      console.log(response);

      this.eventLog = response.gameLog;

      this.http.get(this.url).subscribe((response:any)=>{
        console.log("What to change");
        console.log(response);
        this.monstres=response.monsters;
        if(this.monstres.length==0){
          console.log("you are the winner");
        }
        this.hero.PointsDeVie=response.hero.PointsDeVie;
        if(this.hero.PointsDeVie==0){
          this.isHeroKilled=true;
          console.log("you are dead");
        }
  
      })
    });
    
  }

  ngOnInit() {
    this.hero.movement=5;
    this.hero.type="hero";
    this.http.get(this.url)
    .subscribe((response:any)=>{
      console.log(response);
      this.monstres=response.monsters;
      this.obstacles=response.obstacles;
      this.gourdins=response.gourdins;
    })
  }

}
