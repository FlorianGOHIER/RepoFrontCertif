import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { PageAllChannelsComponent } from './pages/page-all-channels/page-all-channels.component';
import { PageChannelMessagesComponent } from './pages/page-channel-messages/page-channel-messages.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';

const routes: Routes = [
  { path: 'add', component: PageAddChannelComponent },
  { path: 'all', component: PageAllChannelsComponent },
  { path: 'edit/:id', component: PageEditChannelComponent },
  { path: ':id', component: PageChannelMessagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsRoutingModule {}
