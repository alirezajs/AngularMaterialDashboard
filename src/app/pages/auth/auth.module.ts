import { PublicLayoutComponent } from './../../shared/components/layout/public-layout/public-layout.component';
import { LoginWithSocialMediaComponent } from './../../shared/components/auth/login/login-with-social-media/login-with-social-media.component';
import { GoogleLoginComponent } from './../../shared/components/auth/login/login-with-social-media/login-social-types/google-login/google-login.component';
import { AppleLoginComponent } from './../../shared/components/auth/login/login-with-social-media/login-social-types/apple-login/apple-login.component';
import { FacebookLoginComponent } from './../../shared/components/auth/login/login-with-social-media/login-social-types/facebook-login/facebook-login.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginFormComponent } from 'src/app/shared/components/auth/login/login-form/login-form.component';
import { ForgetPasswordFormComponent } from 'src/app/shared/components/auth/forget-password/forget-password-form/forget-password-form.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgetPasswordFormComponent,
    RegisterComponent,
    FacebookLoginComponent,
    AppleLoginComponent,
    GoogleLoginComponent,
    LoginFormComponent,
    LoginWithSocialMediaComponent,
    PublicLayoutComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
