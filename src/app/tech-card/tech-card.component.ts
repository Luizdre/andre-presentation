import { Component, Input, OnInit } from '@angular/core';
import { TechModel } from 'src/model/tech_model';

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.css']
})
export class TechCardComponent implements OnInit {
  @Input() inputTech: TechModel = new TechModel('', [''], '');

  tech : TechModel = new TechModel('', [''], '');

  constructor() { 
  }

  ngOnInit(): void {
    this.tech = this.inputTech;
  }

}
