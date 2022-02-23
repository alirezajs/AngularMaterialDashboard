import { Subject } from "rxjs";

export interface AuthForm {
  submit(): void;
}
export interface EmailAuthForm {
  email: string;
}

export interface UserNameAuthForm {
  username: string;
}

export interface MobileAuthForm {
  mobile: string;
}

export interface loadable {
  loading: boolean;
  toggleLoading(): void;
}

export interface LoginInterface extends AuthForm {
  password: string;
  goToSignUp(): void;
}

export interface forgetPassInterface extends AuthForm {
  backToLogin(): void;
}

export interface registerInterface extends AuthForm {
  password: string;
  goToSignIn(): void;
}

export interface AngularLoginInterface extends LoginInterface {
  destroy$: Subject<boolean>;
}

