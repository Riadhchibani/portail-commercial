import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from './model/utilisateur'
import { Publication } from './model/Publication';
import { Reclamation } from './model/Reclamation';
import { Demande } from './model/Demande';
import { Commande } from './model/Commande';


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
    return this.http.get(`${this.usersUrl}/log`, { headers })
  }

  public findAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.usersUrl}/allUsers`);
  }

  public getUserbyUsername(username: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.usersUrl}/getUser/${username}`);
  }

  public findById(idUser: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.usersUrl}/getUserByID/${idUser}`);
  }

  public deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.usersUrl}/delete/${id}`);
  }

  public save(utilisateur: Utilisateur): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(utilisateur);
    return this.http.post(`${this.usersUrl}/saveUser`, body, { 'headers': headers });
  }

  public findbyNamepwd(username: String, password: String): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.usersUrl}/login/${username}/${password}`);
  }

  public changeStateOfClient(id: number, state: boolean): Observable<void> {
    return this.http.put<void>(`${this.usersUrl}/updateStateOfUser/${id}/${state}`, null);
  }

  public updateUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.usersUrl}/updateUser`, user);
  }

  public addPublication(publication: Publication): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(publication);
    return this.http.post(`${this.usersUrl}/savePublication`, body, { 'headers': headers });
  }

  public getAllPublication(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.usersUrl}/allPublication`);
  }

  public getAllReclamation(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.usersUrl}/allReclamations`);
  }

  public addReclamation(reclamation: Reclamation): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(reclamation);
    return this.http.post(`${this.usersUrl}/addReclamation`, body, { 'headers': headers });
  }

  public deleteReclamationById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.usersUrl}/deleteReclamation/${id}`);
  }

  public findAllDemand(): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.usersUrl}/allDemand`);
  }

  public addDemandClient(demand: Demande): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(demand);
    return this.http.post(`${this.usersUrl}/addDemand`, body, { 'headers': headers });
  }

  public addAdminDemand(id: number, utilisateur?: Utilisateur) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(utilisateur);
    return this.http.put(`${this.usersUrl}/addAdmin/${id}`, body, { 'headers': headers });
  }

  public getDemandsByAdminId(id?: number): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.usersUrl}/getDemandById/${id}`);
  }

  public updateUserDemand(id: number) {
    return this.http.put(`${this.usersUrl}/updateUserDemand/${id}`, null);
  }

  public getDemandsByUsername(username: string): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.usersUrl}/getDemandClient/${username}`);
  }

  public deleteDemand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.usersUrl}/deleteDemand/${id}`);
  }

  public deletePubById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.usersUrl}/deletePub/${id}`);
  }

  public getReclamationsByUsername(username: string): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.usersUrl}/getReclamation/${username}`);
  }

  public getTest(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.usersUrl}/testUsername`);
  }

  public getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.usersUrl}/allCommandes`);
  }

  public addCommande(commande: Commande) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(commande);
    return this.http.post(`${this.usersUrl}/addCommande`, body, { 'headers': headers });
  }

  public getCommandesByUsername(username: string): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.usersUrl}/getCommandes/${username}`);
  }

  public setAcceptionValue(id: number, state: boolean): Observable<void> {
    return this.http.put<void>(`${this.usersUrl}/setAcceptation/${id}/${state}`, null);
  }

  public getCommandeByDemandeId(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${this.usersUrl}/getCommandeByDemandeId/${id}`);
  }

}
