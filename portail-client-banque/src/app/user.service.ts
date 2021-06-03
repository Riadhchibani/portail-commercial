import { DataResponse } from './model/DataResponse';
import { ImSousFamilles } from './model/ImSousFamilles';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Utilisateur } from './model/utilisateur'
import { Publication } from './model/Publication';
import { Reclamation } from './model/Reclamation';
import { Demande } from './model/Demande';
import { Commande } from './model/Commande';
import { ActivatedRoute } from '@angular/router';
import { ObjectResponseData } from './model/ObjectResponseData';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient, private routerService: ActivatedRoute) {
    this.usersUrl = environment.apibaseUrl;
  }

  public findAll(username: string): Observable<Utilisateur[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Utilisateur[]>(`${this.usersUrl}/allUsers`, { headers });
  }

  public getUserbyUsername(usernameClient: string, username?: string): Observable<Utilisateur> {
    let token = localStorage.getItem((username == undefined ? usernameClient : username));
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Utilisateur>(`${this.usersUrl}/getUser/${usernameClient}`, { headers });
  }

  public findById(idUser: number, username: string): Observable<Utilisateur> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Utilisateur>(`${this.usersUrl}/getUserByID/${idUser}`, { headers },);
  }

  public deleteById(id: number, username: string): Observable<void> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.delete<void>(`${this.usersUrl}/delete/${id}`, { headers });
  }

  public save(utilisateur: Utilisateur, username: string): Observable<any> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    headers = headers.set('content-type', 'application/json');
    const body = JSON.stringify(utilisateur);
    return this.http.post(`${this.usersUrl}/saveUser`, body, { headers });
  }

  public findbyNamepwd(username: string, password: string): Observable<Utilisateur> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Utilisateur>(`${this.usersUrl}/login/${username}/${password}`, { headers });
  }

  public changeStateOfClient(id: number, state: boolean, username: string): Observable<void> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.put<void>(`${this.usersUrl}/updateStateOfUser/${id}/${state}`, null, { headers });
  }

  public updateUser(user: Utilisateur, username: string): Observable<Utilisateur> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.put<Utilisateur>(`${this.usersUrl}/updateUser`, user, { headers });
  }

  public addPublication(publication: Publication, username: string): Observable<any> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    headers = headers.set('content-type', 'application/json');
    const body = JSON.stringify(publication);
    return this.http.post(`${this.usersUrl}/savePublication`, body, { headers });
  }

  public getAllPublication(username: string): Observable<Publication[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Publication[]>(`${this.usersUrl}/allPublication`, { headers });
  }

  public getAllReclamation(username: string): Observable<Reclamation[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Reclamation[]>(`${this.usersUrl}/allReclamations`, { headers });
  }

  public addReclamation(reclamation: Reclamation, username: string): Observable<any> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    headers = headers.set('content-type', 'application/json');
    const body = JSON.stringify(reclamation);
    return this.http.post(`${this.usersUrl}/addReclamation`, body, { headers });
  }

  public deleteReclamationById(id: number, username: string): Observable<void> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.delete<void>(`${this.usersUrl}/deleteReclamation/${id}`, { headers });
  }

  public findAllDemand(username: string): Observable<Demande[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Demande[]>(`${this.usersUrl}/allDemand`, { headers });
  }

  public addDemandClient(demand: Demande, username: string): Observable<any> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    headers = headers.set('content-type', 'application/json');
    const body = JSON.stringify(demand);
    return this.http.post(`${this.usersUrl}/addDemand`, body, { headers });
  }

  public addAdminDemand(id: number, username: string, utilisateur?: Utilisateur) {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    headers = headers.set('content-type', 'application/json');
    const body = JSON.stringify(utilisateur);
    return this.http.put(`${this.usersUrl}/addAdmin/${id}`, body, { headers });
  }

  public getDemandsByAdminId(username: string, id?: number): Observable<Demande[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Demande[]>(`${this.usersUrl}/getDemandById/${id}`, { headers });
  }

  public updateUserDemand(id: number, username: string) {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.put(`${this.usersUrl}/updateUserDemand/${id}`, null, { headers });
  }

  public getDemandsByUsername(username: string): Observable<Demande[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Demande[]>(`${this.usersUrl}/getDemandClient/${username}`, { headers });
  }

  public deleteDemand(id: number, username: string): Observable<void> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.delete<void>(`${this.usersUrl}/deleteDemand/${id}`, { headers });
  }

  public deletePubById(id: number, username: string): Observable<void> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.delete<void>(`${this.usersUrl}/deletePub/${id}`, { headers });
  }

  public getReclamationsByUsername(username: string): Observable<Reclamation[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Reclamation[]>(`${this.usersUrl}/getReclamation/${username}`, { headers });
  }

  public getTest(username: string): Observable<boolean> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<boolean>(`${this.usersUrl}/testUsername`, { headers });
  }

  public getCommandes(username: string): Observable<Commande[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Commande[]>(`${this.usersUrl}/allCommandes`, { headers });
  }

  public addCommande(commande: Commande, username: string) {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    headers = headers.set('content-type', 'application/json');
    const body = JSON.stringify(commande);
    return this.http.post(`${this.usersUrl}/addCommande`, body, { headers });
  }

  public getCommandesByUsername(username: string): Observable<Commande[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Commande[]>(`${this.usersUrl}/getCommandes/${username}`, { headers });
  }

  public setAcceptionValue(id: number, state: boolean, username: string): Observable<void> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.put<void>(`${this.usersUrl}/setAcceptation/${id}/${state}`, null, { headers });
  }

  public getCommandeByDemandeId(id: number, username: string): Observable<Commande> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Commande>(`${this.usersUrl}/getCommandeByDemandeId/${id}`, { headers });
  }

  public upload(selectedFile: File, username: string): Observable<HttpEvent<any>> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    const formData: FormData = new FormData();
    formData.set('file', selectedFile, selectedFile.name);
    return this.http.post<any>(`${this.usersUrl}/upload?file=`, formData, { headers });
  }

  public getImage(imageName: string, username: string): Observable<any> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    headers = headers.set('content-type', 'application/json');
    headers = headers.set('responseType', 'blob');
    return this.http.get<any>(`${this.usersUrl}/files/${imageName}`, { headers });
  }

  public deleteImage(imageName: string, username: string): Observable<void> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.delete<void>(`${this.usersUrl}/deleteImage/${imageName}`, { headers });
  }

  public getAllPublicationForClient(username: string): Observable<Publication[]> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<Publication[]>(`${this.usersUrl}/allPublicationForClient`, { headers });
  }

  public generateToken(request: any): Observable<string> {
    return this.http.post<string>(`${this.usersUrl}/authenticate`, request, { responseType: 'text' as 'json' })
  }

  public returnToken(token: string): Observable<any> {
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<any>(`${this.usersUrl}/res`, { headers, responseType: 'text' as 'json' })
  }

  public deleteCommand(id: any, username: string): Observable<void> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.delete<void>(`${this.usersUrl}/deleteCommand/${id}`, { headers });
  }

  public addResponse(idRec: number, message: string, username: string): Observable<void> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.put<void>(`${this.usersUrl}/addResponse/${idRec}/${message}/${username}`, null, { headers });
  }

  public getData(token: string, code: string): Observable<ObjectResponseData[]> {
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<ObjectResponseData[]>(`${this.usersUrl}/allFamilleData/${code}`, { headers, responseType: 'text' as 'json' })
  }

  public getSousFamille(username:string): Observable<ImSousFamilles[]>{
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', strToken);
    return this.http.get<ImSousFamilles[]>(`${this.usersUrl}/getDataSousFamille`, { headers });
  }

  public getDataArticle(username:string, res:DataResponse): Observable<any> {
    let token = localStorage.getItem(username);
    let strToken = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Authorization', strToken);
    headers = headers.set('content-type', 'application/json');
    const body = JSON.stringify(res);
    return this.http.post(`${this.usersUrl}/getProduct`, body, { headers });
  }
}
