import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.scss']
})
export class CreerCompteComponent implements OnInit {

  fgDonneesPerso: FormGroup;
  fgEntreprise: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fgDonneesPerso = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.fgEntreprise = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  


}
