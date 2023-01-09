import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconDayComponent } from './components/icon-day/icon-day.component';
import { IconNightComponent } from './components/icon-night/icon-night.component';



@NgModule({
  declarations: [
    IconCloseComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconNavComponent,
    IconDayComponent,
    IconNightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconCloseComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconNavComponent,
    IconDayComponent,
    IconNightComponent
  ]
})
export class IconsModule { }
