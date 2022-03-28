import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MessagesPage } from './messages.page';
import { MessagesPageRoutingModule } from './messages-routing.module';

@NgModule({
  imports: [CommonModule, MessagesPageRoutingModule, SharedModule],
  declarations: [MessagesPage],
})
export class MessagesPageModule {}
