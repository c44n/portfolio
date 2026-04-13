import { Component } from '@angular/core';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-projects',
  imports: [CarouselModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
