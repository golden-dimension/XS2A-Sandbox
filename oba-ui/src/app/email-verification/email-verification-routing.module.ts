import {EmailVerificationComponent} from './email-verification.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: EmailVerificationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class EmailVerificationRoutingModule {
}
