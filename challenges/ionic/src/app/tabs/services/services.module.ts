import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ServicesPage } from './services.page';
import { ServicesPageRoutingModule } from './services-routing.module';

@NgModule({
  imports: [CommonModule, ServicesPageRoutingModule, SharedModule],
  declarations: [ServicesPage],
})
export class ServicesPageModule {}
