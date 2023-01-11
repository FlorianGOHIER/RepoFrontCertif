import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEditMessageComponent } from './pages/page-edit-message/page-edit-message.component';

const routes: Routes = [{ path: ':id', component: PageEditMessageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
