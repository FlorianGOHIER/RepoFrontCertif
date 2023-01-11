import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { Message } from 'src/app/core/models/message';
import { User } from 'src/app/core/models/user';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { MessagesService } from 'src/app/core/services/messages.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-channel-messages',
  templateUrl: './page-channel-messages.component.html',
  styleUrls: ['./page-channel-messages.component.scss'],
})
export class PageChannelMessagesComponent {
  public collection$!: BehaviorSubject<Message[]>;
  public channel$!: Observable<Channel>;
  public user$!: Observable<User>;
  public form!: FormGroup;
  public message!: Message;

  constructor(
    private messagesService: MessagesService,
    private channelsService: ChannelsService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.messagesService.refreshCollection(id);
      this.collection$ = this.messagesService.collection$;
      this.channel$ = this.channelsService.getChannelById(id);

      this.message = new Message();
      this.form = this.formBuilder.group({
        text: [this.message.text],
        channelId: [id],
        userId: [this.message.userId],
      });

      this.user$ = this.usersService.getUserById(this.message.userId);
    });
  }

  // public deleteOrder(message: Message) {
  //   this.messagesService.delete(message).subscribe();
  // }

  public onSubmit() {
    this.messagesService.add(this.form.value).subscribe();
  }

  public goToEdit(id: number) {
    this.router.navigate(['messages', id]);
  }
}
