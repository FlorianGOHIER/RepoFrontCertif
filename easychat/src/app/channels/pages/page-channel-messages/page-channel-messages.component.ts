import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-channel-messages',
  templateUrl: './page-channel-messages.component.html',
  styleUrls: ['./page-channel-messages.component.scss'],
})
export class PageChannelMessagesComponent {
  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
  }
}
