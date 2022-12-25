import { Component, ViewEncapsulation } from '@angular/core';

declare var updateClock: any;
declare var current_Time: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'Clothes Dashboard';
  logoImg:string = "assets/images/Logo.png";
}
