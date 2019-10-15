import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from "@angular/router";


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  email: any;
  password: any;
  ConfrimPassword : any;

  firstName : any;

  lastName : any;

  isError


  bsModalRef: BsModalRef;
  public termsAgreed = false

  constructor(
    private authService: AuthService,  
    private modalService: BsModalService) {}
 
   ngOnInit() {}

  
  register(form: NgForm) {
    this.email = form.value.email;

    this.password = form.value.password;

    this.ConfrimPassword = form.value.ConfrimPassword;

    this.firstName = form.value.firstName;

    this.lastName = form.value.lastName;

    if(this.password === this.ConfrimPassword && this.termsAgreed){

         this.authService.createUser(this.email, this.password);

    } else {

      if( this.termsAgreed) {
        
        window.alert(' Password and Confirm Password does not match');

      } else {

        window.alert(' Agree Terms and Condition');
      }

      

    }

    

  }

  openModal(event, template: TemplateRef<any>) {
    event.preventDefault();
    this.bsModalRef = this.modalService.show(template);
  }

  onTermsAgree(){
    this.termsAgreed = true
    this.bsModalRef.hide()
  }

  onTermsClose(){
    this.bsModalRef.hide()
  }


}
