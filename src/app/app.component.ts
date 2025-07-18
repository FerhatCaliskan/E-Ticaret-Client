import { Component } from '@angular/core';
import { AuthService } from './services/common/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any //jquery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public authService: AuthService, private toastrService: CustomToastrService) {
    authService.identityCheck();
  }

  signOut() {
    localStorage.removeItem("accessToken");
    this.authService.identityCheck();
    this.toastrService.message("Oturumunuz kapatılmıştır", "Oturum Kapatıldı", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopRight
    })
  }
}