import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-add-channel',
  templateUrl: './page-add-channel.component.html',
  styleUrls: ['./page-add-channel.component.scss'],
})
export class PageAddChannelComponent {
  public channel: Channel;
  public form: FormGroup;
  public newChannel!: Channel;

  constructor(
    private formBuilder: FormBuilder,
    private channelService: ChannelsService,
    private router: Router
  ) {
    this.channel = new Channel();
    this.form = this.formBuilder.group({
      name: [this.channel.name],
      description: [this.channel.description],
      ownerId: [this.channel.ownerId],
    });
  }

  public onSubmit() {
    this.channelService.add(this.form.value).subscribe((data) => {
      this.router.navigate([`channels/${data.id}`]);
    });
  }
}
