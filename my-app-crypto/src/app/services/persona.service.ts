import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { UsuarioModel } from '../models';



@Injectable({
  providedIn: 'root'
})


export class PersonaService {

  private myAppCriptoUrl = 'https://localhost:44336/';
  private myApiUrl = 'api/Persona';


  constructor(private http:HttpClient) { }

  obtenerPersona():Observable<any>{
     return this.http.get(this.myAppCriptoUrl + this.myApiUrl);
  }


  obtenerPersonaPorId(mail: string, pass: string):Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(this.myAppCriptoUrl + this.myApiUrl +"?&mail="+ mail +"&pass="+ pass)
    //                                                         ?&mail=mail@mail.com&pass=123456
    .pipe(map (data => {
    localStorage.setItem('currentUser', JSON.stringify(data));
    return data;
  }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }


  insertarPersona(usuario: any):Observable<any>{
    return this.http.post(this.myAppCriptoUrl + this.myApiUrl, usuario);
  }
  modificarPersona(id: number, usuario: any):Observable<any>{
     return this.http.put(this.myAppCriptoUrl + this.myApiUrl + id, usuario);
  }
  eliminarPersona(id: number):Observable<any>{
     return this.http.delete(this.myAppCriptoUrl + this.myApiUrl + id);
  }

}
