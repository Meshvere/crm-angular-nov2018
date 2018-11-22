import { Component, OnInit } from '@angular/core';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public faBars = faBars;
  public faUser = faUser;
  public faTimes = faTimes;

  public open: boolean;

  constructor() { }

  ngOnInit() {
    this.open = true;
    this.title = 'App formation';
  }

}
