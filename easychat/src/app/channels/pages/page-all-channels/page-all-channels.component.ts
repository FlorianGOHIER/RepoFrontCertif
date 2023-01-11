import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-all-channels',
  templateUrl: './page-all-channels.component.html',
  styleUrls: ['./page-all-channels.component.scss'],
})
export class PageAllChannelsComponent {
  public channels$: BehaviorSubject<Channel[]>;

  constructor(private service: ChannelsService) {
    this.service.refreshChannels();
    this.channels$ = this.service.channels$;
    console.log('page all channel ts');
    console.log(this.channels$);
  }
}
