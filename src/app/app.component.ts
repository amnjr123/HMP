import { Component, Input, OnInit, Inject } from '@angular/core';
import { SessionService } from './services/session.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MdpOublieComponent } from './popups/mdp-oublie/mdp-oublie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'HMP';
  userLoggedIn=false;
  hide = true;

  tUser;
  tPassword;

  constructor(private sessionService:SessionService,public dialog: MatDialog ){

  }

  ngOnInit(){
    if(this.sessionService.isLoggedIn()){
      this.userLoggedIn=true;
    } else {
      this.userLoggedIn=false;
    }
  }

  bLoginClick(){
    if (this.sessionService.login(this.tUser,this.tPassword)){
      this.userLoggedIn=true;
    } else {
      this.userLoggedIn=false;
    }
    console.log(this.tUser+" "+this.tPassword);
    console.log(this.sessionService.isLoggedIn());
  }

  bMDPOublieClick(){
    const dialogRef = this.dialog.open(MdpOublieComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
