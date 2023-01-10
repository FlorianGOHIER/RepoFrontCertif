import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { UiModule } from '../ui/ui.module';
import { SharedModule } from '../shared/shared.module';
import { TemplateContainerComponent } from '../templates/components/template-container/template-container.component';
import { TemplatesModule } from '../templates/templates.module';
import { Router, RouterLink } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavComponent],
  imports: [CommonModule, SharedModule, RouterLink],
  exports: [
    UiModule,
    LoginModule,
    IconsModule,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    TemplatesModule,
  ],
})
export class CoreModule {}
