import { Injectable } from '@angular/core';
import {Utilisateur} from '../model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private loggedIn=false;
  private utilisateur:Utilisateur=new Utilisateur();

  constructor() { }

  login(login,password){
    if (this.utilisateur.getLogin()==login && this.utilisateur.getPassword()==password){
      this.loggedIn=true;
      return true;
    } else {
      this.loggedIn=false;
      return false;
    }
  }

  getUser(){
    return this.utilisateur;
  }

  isLoggedIn(){
    return this.loggedIn;
  }
}
