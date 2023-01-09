import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-day',
  templateUrl: './icon-day.component.html',
  styleUrls: ['./icon-day.component.scss'],
})
export class IconDayComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faSun;
  }
}
