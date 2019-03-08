import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataConnectionService {

  constructor(private http: HttpClient) { }

  servletUrl = 'lienServlet';

  getServlet() {
    return this.http.get(this.servletUrl);
  }

}
