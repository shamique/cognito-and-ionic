import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { LoginPage } from "../pages/login/login";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { CognitoServiceProvider } from '../providers/cognito-service/cognito-service';

@NgModule({
  declarations: [MyApp, LoginPage, SignUpPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginPage, SignUpPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CognitoServiceProvider
  ]
})
export class AppModule {}
