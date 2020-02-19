import { Component } from '@angular/core';
import { Hero } from './models/Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isGameStarted = false;
  private isHeroSelected = false;
  title = 'Harry Potter';
  private heroSelected:Hero;
  
  startGame(){
    this.isGameStarted=true;
  }
  setHero(hero:Hero){
    this.heroSelected=hero;
    this.isHeroSelected=true;
  }

}
