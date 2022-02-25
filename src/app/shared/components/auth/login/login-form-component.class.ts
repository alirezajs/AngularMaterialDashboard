import { Directive, OnDestroy, OnInit } from '@angular/core';
import {
  AngularLoginInterface,
  EmailAuthForm,
  loadable,
} from '../login.interface';
import { Subject } from 'rxjs';

@Directive()
export abstract class LoginFormComponentClass
  implements OnDestroy, AngularLoginInterface, EmailAuthForm, loadable
{
  constructor() {
    this.loading = false;
    this.email = '';
    this.destroy$ = new Subject();
    this.password = '';
  }
  validateEmail(): boolean {
    throw new Error('Method not implemented.');
  }

  loading: boolean;
  email: string = '';
  destroy$: Subject<boolean>;
  password: string;

  toggleLoading(): void {
    this.loading = !this.loading;
  }
  goToSignUp(): void {
    throw new Error('Method not implemented.');
  }
  submit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
