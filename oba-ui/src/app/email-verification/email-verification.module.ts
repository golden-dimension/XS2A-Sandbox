import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmailVerificationComponent} from './email-verification.component';
import {EmailVerificationRoutingModule} from './email-verification-routing.module';

@NgModule({
  declarations: [
    EmailVerificationComponent
  ],
  imports: [
    CommonModule,
    EmailVerificationRoutingModule
  ]
})
export class EmailVerificationModule {
}
