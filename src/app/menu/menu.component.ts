import { Component, OnInit } from '@angular/core';
import { faUserPlus, faBell, faQuestionCircle, faSortDown, faSearch, faAlignRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  userIcon = faUserPlus;
  bellIcon = faBell;
  questionIcon = faQuestionCircle;
  arrowIcon = faSortDown;
  serchIcon = faSearch;
  iconLeft = faAlignRight;

  constructor() { }

  ngOnInit(): void {
  }

}
