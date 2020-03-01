import { Component, OnInit, Input } from '@angular/core';
import { Monstre } from '../models/Monstre';

@Component({
  selector: 'app-mhealth',
  templateUrl: './mhealth.component.html',
  styleUrls: ['./mhealth.component.css']
})
export class MhealthComponent implements OnInit {
  @Input() monstres : Monstre[];
  @Input() gourdins : any;
  constructor() {}

  ngOnInit() {
  }

}
