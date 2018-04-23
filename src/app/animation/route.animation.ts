
import {AnimationMetadata, animate, state, style, transition, trigger
} from '@angular/animations';

export const ROUTE_ANIMATION: AnimationMetadata
  = trigger('routeAnimation', [
  state('*',
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  ),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-100%)'
    }),
    animate('0.3s ease-in-out')
  ]),
  transition(':leave', [
    animate('0.3s ease-in-out', style({
      opacity: 0,
      transform: 'translateY(100%)'
    }))
  ])
]);
