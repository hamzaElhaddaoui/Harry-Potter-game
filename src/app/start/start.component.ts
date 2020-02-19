import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Output() start = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  lunchGame(){
    console.log("lunch the game");
    this.start.emit();
  }

}
