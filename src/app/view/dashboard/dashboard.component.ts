import {Component, HostBinding, OnInit} from '@angular/core';
import {ROUTE_ANIMATION} from '../../animation/route.animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ROUTE_ANIMATION]
})
export class DashboardComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
