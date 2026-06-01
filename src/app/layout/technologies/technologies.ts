import { OverlayModule, ConnectedPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  imports: [OverlayModule],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {
  isOpen = false;

  readonly overlayPositions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      offsetY: -10,    
    }
  ]
}
