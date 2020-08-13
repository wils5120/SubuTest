import { Component, OnInit } from '@angular/core';
import { faCalendar, faHistory, faWaveSquare, faSun, faThLarge, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  dashIcon = faThLarge;
  eventIcon = faCalendarAlt;
  velIcon = faHistory;
  vibraIcon = faWaveSquare;
  configIcon = faSun;

  constructor() { }

  ngOnInit(): void {
  }

}
