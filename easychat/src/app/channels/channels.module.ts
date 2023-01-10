import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageChannelMessagesComponent } from './pages/page-channel-messages/page-channel-messages.component';
import { PageAllChannelsComponent } from './pages/page-all-channels/page-all-channels.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';


@NgModule({
  declarations: [
    PageChannelMessagesComponent,
    PageAllChannelsComponent,
    PageAddChannelComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ],
  exports: [
    PageChannelMessagesComponent,
    PageAllChannelsComponent,
    PageAddChannelComponent
  ]
})
export class ChannelsModule { }
