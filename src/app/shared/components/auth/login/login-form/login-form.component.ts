import { Component, OnInit } from '@angular/core';
import { LoginFormComponentClass } from '../login-form-component.class';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends LoginFormComponentClass implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit(): void {
  }

}
