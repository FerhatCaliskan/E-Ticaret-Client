import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordResetComponent } from './password-reset.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: PasswordResetComponent }
    ])
  ]
})
export class PasswordResetModule { }
