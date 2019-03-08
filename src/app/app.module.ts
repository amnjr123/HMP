import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { MdpOublieComponent } from './popups/mdp-oublie/mdp-oublie.component';
import { MainClientComponent } from './fenetresClient/main-client/main-client.component';
import { CreerCompteComponent } from './fenetresGlobal/creer-compte/creer-compte.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MdpOublieComponent,
    CreerCompteComponent,
    MainClientComponent
  ],
  imports: 
  [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDialogModule,
    MatStepperModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatSelectModule,
    HttpClientModule
  ],
  entryComponents: [
    MdpOublieComponent,
    CreerCompteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
