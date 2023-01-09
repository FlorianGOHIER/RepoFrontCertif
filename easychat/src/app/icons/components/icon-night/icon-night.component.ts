import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-night',
  templateUrl: './icon-night.component.html',
  styleUrls: ['./icon-night.component.scss'],
})
export class IconNightComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faMoon;
  }
}
