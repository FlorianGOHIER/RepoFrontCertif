import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TemplatesModule } from '../templates/templates.module';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BtnComponent, DateFormatPipe],
  imports: [CommonModule, RouterModule],
  exports: [BtnComponent, TemplatesModule, DateFormatPipe],
})
export class SharedModule {}
