import { Component } from "@angular/core";
import { CognitoServiceProvider } from "../../providers/cognito-service/cognito-service";
import { SignUpPage } from "../../pages/sign-up/sign-up";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  email: string;
  password: string;
  signUpPage = SignUpPage;

  constructor(public CognitoSerive:CognitoServiceProvider) {
  }

  login(){
    this.CognitoSerive.authenticate(this.email, this.password)
    .then(res =>{
      console.log(res);
    }, err =>{
      console.log(err);
    });
  }
}
