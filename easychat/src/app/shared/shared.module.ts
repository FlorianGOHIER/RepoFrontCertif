import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [BtnComponent],
  imports: [CommonModule],
  exports: [BtnComponent, TemplatesModule],
})
export class SharedModule {}
