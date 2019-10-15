import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


  email: any;
  password: any;

  isError
  
  constructor(private authSerivce : AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.email = form.value.email;

    this.password = form.value.password;

    this.authSerivce.signInEmailPassword(this.email, this.password);

  }

}
