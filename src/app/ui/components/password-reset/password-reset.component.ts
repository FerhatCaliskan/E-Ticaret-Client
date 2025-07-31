import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { UserAuthService } from 'src/app/services/common/models/user-auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent extends BaseComponent {

  constructor(
    spinner: NgxSpinnerService,
    private userAuthService: UserAuthService,
    private alertifyService: AlertifyService) {
    super(spinner)
  }

  passwordReset(email: string) {
    this.showSpinner(SpinnerType.BallSpinClockwise)
    this.userAuthService.passwordReset(email, () => {
      this.hideSpinner(SpinnerType.BallSpinClockwise)
      this.alertifyService.message("Şifre sıfırlama maili gönredildi", {
        messageType: MessageType.Success,
        position: Position.TopCenter
      })
    })
  }
}
