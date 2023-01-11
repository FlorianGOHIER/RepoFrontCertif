import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { PageEditMessageComponent } from './pages/page-edit-message/page-edit-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageEditMessageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PageEditMessageComponent],
})
export class MessagesModule {}
