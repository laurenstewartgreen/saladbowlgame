import {Component, Input, OnInit} from '@angular/core';
import { TeamInputComponent } from '../team-input/team-input.component';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
  teamInput: TeamInputComponent;

  constructor() { }

  ngOnInit() {
  }

}
