import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TemplatesModule } from '../templates/templates.module';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [BtnComponent, DateFormatPipe],
  imports: [CommonModule],
  exports: [BtnComponent, TemplatesModule, DateFormatPipe],
})
export class SharedModule {}
