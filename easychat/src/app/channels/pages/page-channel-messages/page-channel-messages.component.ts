import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { Message } from 'src/app/core/models/message';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-page-channel-messages',
  templateUrl: './page-channel-messages.component.html',
  styleUrls: ['./page-channel-messages.component.scss'],
})
export class PageChannelMessagesComponent {
  public collection$!: BehaviorSubject<Message[]>;
  public channel$!: Observable<Channel>;
  public form: FormGroup;
  public message: Message;
  public channelId!: number;

  constructor(
    private messagesService: MessagesService,
    private channelsService: ChannelsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.messagesService.refreshCollection(id);
      this.collection$ = this.messagesService.collection$;
      this.channel$ = this.channelsService.getChannelById(id);
      this.channelId = id;

      this.message = new Message();
      this.form = this.formBuilder.group({
        text: [this.message.text],
        channelId: [id],
      });
    });
  }

  // public deleteOrder(message: Message) {
  //   this.messagesService.delete(message).subscribe();
  // }

  public onSubmit() {
    let message: Message = this.form.value;
    message.channelId = this.channel$.id;
    this.messagesService.add(this.form.value).subscribe();
  }
}
