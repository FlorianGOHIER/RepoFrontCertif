import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavComponent],
  imports: [CommonModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    IconsModule,
    LoginModule,
    UiModule,
  ],
})
export class CoreModule {}
