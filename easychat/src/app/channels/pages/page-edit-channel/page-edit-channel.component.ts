import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-edit-channel',
  templateUrl: './page-edit-channel.component.html',
  styleUrls: ['./page-edit-channel.component.scss'],
})
export class PageEditChannelComponent {
  public form!: FormGroup;
  public id: number;
  public item$: Observable<Channel>;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private channelsService: ChannelsService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.item$ = this.channelsService.getChannelById(this.id).pipe(
      tap((channel) => {
        this.form = this.formBuilder.group({
          name: [channel.name],
          description: [channel.description],
          id: [channel.id],
          ownerId: [channel.ownerId],
        });
      })
    );
  }

  public onSubmit(): void {
    this.channelsService.update(this.form.value).subscribe(() => {
      this.router.navigate(['channels', 'all']);
    });
  }
}
