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
    return this.http.get("http://localhost:8083/log", { headers})
  }

  public findAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.usersUrl}/allUsers`);
  }

  public findById(idUser: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.usersUrl}/getUserByID/${idUser}`);
  }

  public deleteById(id: number):Observable<void>{
    return this.http.delete<void>(`${this.usersUrl}/delete/${id}`);
  }

  public save(utilisateur: Utilisateur): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(utilisateur);
    //console.log(body);
    return this.http.post(`${this.usersUrl}/saveUser`, body,{'headers':headers});
  }

  public findbyNamepwd(username: String, password: String): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.usersUrl}/login/${username}/${password}`);
  }

  public changeStateOfClient(id :number, state:boolean):Observable<void>{
   return this.http.put<void>(`${this.usersUrl}/updateStateOfUser/${id}/${state}`,null);
  }

  public updateUser(user: Utilisateur):Observable<Utilisateur>{
    return this.http.put<Utilisateur>(`${this.usersUrl}/updateUser`,user);
  }
}
