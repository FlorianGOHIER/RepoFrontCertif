import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  @Input() public label!: string;
  @Input() public link!: string;

  // constructor(private router: Router) {}

  // redirect() {
  //   this.router.navigate([this.link]);
  // }
}
