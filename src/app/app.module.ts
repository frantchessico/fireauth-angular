import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {AuthService} from './auth.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailauthComponent } from './emailauth/emailauth.component';
import { PrivateComponent } from './private/private.component';
import { PasswordlessComponent } from './passwordless/passwordless.component';
import { NavabarComponent } from './navabar/navabar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    EmailauthComponent,
    PrivateComponent,
    PasswordlessComponent,
    NavabarComponent
  ],
  imports: [
    BrowserAnimationsModule,

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
