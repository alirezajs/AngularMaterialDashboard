import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/auth/login/login.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { SimpleDashboardComponent } from './pages/dashboard/simple-dashboard/simple-dashboard.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { SideBarComponent } from './shared/components/layout/side-bar/side-bar.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { ReactiveFormComponent } from './shared/components/forms/reactive-form/reactive-form.component';
import { StepFormComponent } from './shared/components/forms/step-form/step-form.component';
import { SimpleTableComponent } from './shared/components/table/simple-table/simple-table.component';
import { OperatorsListComponent } from './pages/operators/operators-list/operators-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RegisterComponent,
    SimpleDashboardComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    ReactiveFormComponent,
    StepFormComponent,
    SimpleTableComponent,
    OperatorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
