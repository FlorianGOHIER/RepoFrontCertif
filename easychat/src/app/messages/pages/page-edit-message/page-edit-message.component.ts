import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-page-edit-message',
  templateUrl: './page-edit-message.component.html',
  styleUrls: ['./page-edit-message.component.scss'],
})
export class PageEditMessageComponent {
  public form!: FormGroup;
  public id: number;
  public message$: Observable<Message>;
  public upMessage!: Message;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.message$ = this.messagesService.getMessageById(this.id).pipe(
      tap((message) => {
        this.form = this.fb.group({
          id: [message.id],
          text: [message.text],
          channelId: [message.channelId],
          userId: [message.userId],
          createdAt: [message.createdAt],
          updatedAt: [message.updatedAt],
        });
      })
    );
  }

  public onSubmit(): void {
    this.messagesService.update(this.form.value).subscribe((data) => {
      this.router.navigate([`channels/${data.channelId}`]);
    });
  }
}
