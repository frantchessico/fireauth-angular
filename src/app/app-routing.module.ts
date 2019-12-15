import { NavabarComponent } from './navabar/navabar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {EmailauthComponent} from './emailauth/emailauth.component';
import {PrivateComponent} from './private/private.component';
import {PasswordlessComponent} from './passwordless/passwordless.component';

// import the Angular Guard
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
    {path: '', component: EmailauthComponent },
    {path: 'signin', component: SigninComponent },
    {path: 'passwordless', component: PasswordlessComponent },
    {path: 'private',
    canActivate: [AuthGuard]
    , component: PrivateComponent, children: [ { path: '', component: NavabarComponent}] },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
