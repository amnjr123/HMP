import { Component, Input, OnInit, Inject } from '@angular/core';
import { SessionService } from './services/session.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MdpOublieComponent } from './popups/mdp-oublie/mdp-oublie.component';
import { CreerCompteComponent } from './fenetresGlobal/creer-compte/creer-compte.component';
import { MainClientComponent } from './fenetresClient/main-client/main-client.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'HMP';

  userLoggedIn;
  user;
  interface;
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
      this.interface="login";
    }
  }

  bLoginClick(){
    if (this.sessionService.login(this.tUser,this.tPassword)){
      this.userLoggedIn=true;
      this.interface="mainClient";
      this.user=this.sessionService.getUser();
    } else {
      this.userLoggedIn=false;
      this.interface="login";
    }
    console.log(this.tUser+" "+this.tPassword);
    console.log(this.sessionService.isLoggedIn());
  }

  bCreerCompteClick(){
    this.userLoggedIn=false;
    this.interface="signIn";
  }

  bMDPOublieClick(){
    const dialogRef = this.dialog.open(MdpOublieComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  backButtonClick(){
    this.userLoggedIn=false;
    this.interface="login";
  }



}
