import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  url = "https://localhost:44305/api/Usuario";


  currentUserSubject: BehaviorSubject<UsuarioModel>;
  currentUser: Observable<UsuarioModel>;
  loggedIn = new Subject<boolean>();

  constructor(private http: HttpClient) {

    console.log("Servicio de Atuenticación está corriendo");
    this.currentUserSubject = new

      BehaviorSubject<UsuarioModel>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  login(usuario: UsuarioModel): Observable<any> {
    return this.http.post<any>(this.url, usuario)
      .pipe(map(data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.loggedIn.next(true);
        return data;
      }));
  }

  
  logout(): void {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

  get usuarioAutenticado(): UsuarioModel {
    return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

}
