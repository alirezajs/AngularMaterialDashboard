import { FooterComponent } from './../../shared/components/layout/footer/footer.component';
import { HeaderComponent } from './../../shared/components/layout/header/header.component';
import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardLayoutComponent } from 'src/app/shared/components/layout/dashboard-layout/dashboard-layout.component';
import { SideBarComponent } from 'src/app/shared/components/layout/side-bar/side-bar.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SimpleDashboardComponent,
    DashboardLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
