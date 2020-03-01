import { Component } from '@angular/core';
import { Hero } from './models/Hero';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isGameStarted = false;
  private isHeroSelected = false;
  title = 'Harry Potter';
  private url:string='https://localhost:44355/api/game';
  private heroSelected:Hero;
  
  
  constructor(private http:HttpClient){

  }

  startGame(){
    this.isGameStarted=true;
  }
  
  setHero(hero:Hero){
    this.heroSelected=hero;
    this.http.post(this.url,{
      id:this.heroSelected.Id
    }).subscribe((response)=>{
      console.log('id envoyer');
      console.log(response);
    })
    this.isHeroSelected=true;
  }

}
