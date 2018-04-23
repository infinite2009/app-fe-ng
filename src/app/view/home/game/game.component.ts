import {Component, HostBinding, OnInit} from '@angular/core';
import {ROUTE_ANIMATION} from '../../../animation/route.animation';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [ ROUTE_ANIMATION ]
})
export class GameComponent implements OnInit {
// why should routeAnimation's value be 'true' or 'false'?
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
