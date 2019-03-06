import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-mdp-oublie',
  templateUrl: './mdp-oublie.component.html',
  styleUrls: ['./mdp-oublie.component.scss']
})
export class MdpOublieComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MdpOublieComponent>) { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Vous devez renseigner votre email' :
        this.email.hasError('email') ? 'Email invalide' :
            '';
  }

}
