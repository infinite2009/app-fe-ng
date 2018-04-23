import {Component, HostBinding, OnInit} from '@angular/core';
import {ROUTE_ANIMATION} from "../../animation/route.animation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ROUTE_ANIMATION]
})
export class HomeComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
