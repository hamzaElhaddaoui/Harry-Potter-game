import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { DataService } from '../data.service';
import { Hero } from '../models/Hero';
import { Obstacles } from '../models/Obstacles';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnChanges{
  

  @Input('data') dataGrid : object[][];
  @Input() hero: Hero;
  @Input() obstacles: Obstacles[];

  private field : object={
    type:"normalField",
  };

  private map:any[]=[];
  private nbrRow: object[] = Array(17);

  private map1:number[][] = Array<number[]>(17);
  
  constructor() { 
  }

  private fillMap(){
    for (let i = 0; i < 17; i++) {
      this.map[i]=[];
      for (let j = 0; j < 17; j++) {
        this.map[i][j]={type:"normalField"};
      }
    }
  }

  private fillObstacle(){
    this.obstacles.forEach(obstacle => {
      this.map[obstacle.PositionX][obstacle.PositionY]=obstacle;
    })
  }

  private setHero(){
    this.map[this.hero.PositionX][this.hero.PositionY]= this.hero;
  }

  ngOnInit() {
    this.fillMap();
    this.fillObstacle();
    this.setHero();
    console.log(this.map);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fillMap(); 
    this.fillObstacle();
    this.setHero();
  }

}
