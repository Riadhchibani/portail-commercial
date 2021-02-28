import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from './model/utilisateur'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = environment.apibaseUrl;
  }
  public login(username: String, password: String) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ":" + password) })
    return this.http.get("http://localhost:8080/log", { headers, responseType: 'text' as 'json' })
  }

  public getUser() {
    let username = "user1";
    let password = "123";
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ":" + password) })
    return this.http.get("http://localhost:8080/getUsers", { headers})
  }

  public findAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.usersUrl);
  }

  public findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.usersUrl}/${id}`);
  }

  public save(utilisateur: Utilisateur) {
    return this.http.post<Utilisateur>(this.usersUrl, utilisateur);
  }

  public findbyNamepwd(username: String, password: String): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.usersUrl}/${username}/${password}`);
  }
}
