import { Component, OnInit } from "@angular/core";

import { NotificationService } from "@app/core/services/notification.service";


import { AuthService } from "@app/features/auth/auth.service";

@Component({
  selector: "sa-logout",
  template: `
<div id="logout" (click)="showPopup()" class="btn-header transparent pull-right">
        <span> <a title="Sign Out"><i class="fa fa-sign-out"></i></a> </span>
    </div>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  public user

  constructor(
    private authService: AuthService,
     private notificationService: NotificationService
  ) {
  }

  showPopup() {
    this.notificationService.smartMessageBox(
      {
        title:
          "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong></strong></span> ?",
        content:
          "You can improve your security further after logging out by closing this opened browser",
        buttons: "[No][Yes]"
      },
      ButtonPressed => {
        if (ButtonPressed == "Yes") {
          this.logout();
        }
      }
    );
  }

  logout() {
    this.authService.fbSignOut();

  }

  ngOnInit() {}
}
