import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss'],
})
export class PageSignUpComponent {
  public user: User;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.user = new User();
    this.form = this.formBuilder.group({
      username: [this.user.username],
      email: [this.user.email],
      password: [this.user.password],
    });
  }

  public onSubmit() {
    this.usersService.add(this.form.value).subscribe(() => {
      this.router.navigate(['channels/3']);
    });
  }
}
