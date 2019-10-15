import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { config } from '../../shared/config'
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  constructor(private router : Router) { }

  isError: boolean = false;

  user : any;

  isAuthenticated : boolean = false;

  fbInitAuth() {


    firebase.initializeApp(config.fbConfig);

  }


  createUser(email: string, password: string) {

    if (firebase.apps.length === 0) {
      this.fbInitAuth();
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(

        response => {

          
         window.alert('User Registered Successfully');

          window.location.href = '/';

        }

      ).catch(

        (err) => {

          console.log(err);

          window.alert('Registration Failed! Please try again');

        }

      )

  }


  signInEmailPassword(email: string, password: string) {

    if (firebase.apps.length === 0) {
      this.fbInitAuth();
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(

        response => {

         this.setAuthStatus();

        }


      ).catch(

        (err) => {

          this.isError = true;

          console.log(`Code : ${err.code}  ;  'Message : ${err.message}`);

          window.alert('Invalid Email - Password Combination');

          window.location.href = '/';


        }

      )

  }


  getAuthStatus(){


    return this.isAuthenticated;

  }

  setAuthStatus(){

    this.isAuthenticated = true;

    this.router.navigate(['/home']);

  }


  getErrorStatus() {

    return this.isError

  }

  fbSignOut() {

    firebase.auth().signOut().then(function () {

      window.location.href = '/';

    }).catch(function (error) {

      console.log(error);

    });

  }

}



