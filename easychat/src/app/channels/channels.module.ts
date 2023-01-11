import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageChannelMessagesComponent } from './pages/page-channel-messages/page-channel-messages.component';
import { PageAllChannelsComponent } from './pages/page-all-channels/page-all-channels.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { SharedModule } from '../shared/shared.module';
import { IconsModule } from '../icons/icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';

@NgModule({
  providers: [DatePipe],
  declarations: [
    PageChannelMessagesComponent,
    PageAllChannelsComponent,
    PageAddChannelComponent,
    PageEditChannelComponent,
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    SharedModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PageChannelMessagesComponent,
    PageAllChannelsComponent,
    PageAddChannelComponent,
    PageEditChannelComponent,
  ],
})
export class ChannelsModule {}
