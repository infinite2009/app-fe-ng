import {Component, HostBinding, OnInit} from '@angular/core';
import {ROUTE_ANIMATION} from '../../../animation/route.animation';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [ROUTE_ANIMATION]
})
export class WelcomeComponent implements OnInit {
  // why should routeAnimation's value be 'true' or 'false'?
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.position')  position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
