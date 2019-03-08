import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private loggedIn = false;
  private utilisateur: Utilisateur = new Utilisateur();

  constructor(private http: HttpClient) { }


  servletUrl = 'http://192.168.145.62:8080/HMP-war/ServletSessionUtilisateur';

  getServlet() {

    let req = { "action": "Connexion", "login": "test@gmail.com", "mdp": "test" };

    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json')
      .set('Access-control-Allow-Origin', 'http://192.168.145.62:8080/HMP-war/ServletSessionUtilisateur');

    return this.http.post(this.servletUrl, req, { headers: headers }).pipe(map(data => { return data; }));

  }


  login(login, password) {
    if (this.utilisateur.getLogin() == login && this.utilisateur.getPassword() == password) {
      this.loggedIn = true;
      return true;
    } else {
      this.loggedIn = false;
      return false;
    }
  }

  getUser() {
    return this.utilisateur;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
